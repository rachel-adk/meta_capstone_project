import { useEffect, useState } from "react";
import LogNewAllergy from "./LogNewAllergy";

import { getAllergyLogs } from "../utils/data";

const AllergyPage = () => {
  const [allergies, setAllergies] = useState([]);

  const handleCreate = async (newLog) => {
    setAllergies((prev) => [newLog, ...prev]);
  };

  useEffect(() => {
    const getAllergies = async () => {
      try {
        const info = await getAllergyLogs();
        setAllergies(info);
      } catch (error) {
        console.error("Failed to get logs", error);
      }
    };
    getAllergies();
  }, []);

  return (
    <div className=" min-h-screen bg-teal-50 py-8">
      <div className="max-w-9xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-900 mb-2 ">
            Allergy Logs
          </h1>
          <p className="text-teal-700"> Track your allergic reactions here </p>
        </div>
        <div className="mb-8">
          <LogNewAllergy onCreate={handleCreate} />
        </div>
        {allergies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-clg text-teal-600">No allergies logged yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allergies.map((log) => (
              <div
                key={log.id}
                className="bg-white border border-rose-200 rounded-lg p-6 hover:shadow-lg hover-border-teal-600 transition-all"
              >
                <h3 className="text-lg font-semibold mb-3 uppercase text-teal-900">
                  {log.trigger}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-teal-800">
                    <span className="font-medium">Severity:</span>{" "}
                    {log.severity}/10
                  </p>
                  <p className="text-teal-800">
                    <span className="font-medium">Duration:</span>{" "}
                    {log.reaction || "Not specified"}
                  </p>
                  {log.notes && (
                    <p className="text-teal-800 font-medium">
                      Notes: {log.notes || "No notes provided"}
                    </p>
                  )}
                  <p className="text-teal-600 pt-2 border-t border-teal-100">
                    Date Logged:
                    {log.date
                      ? new Date(log.date).toLocaleDateString()
                      : "Unknown"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllergyPage;
