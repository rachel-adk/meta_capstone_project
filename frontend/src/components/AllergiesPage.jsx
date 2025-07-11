import { useEffect, useState } from "react";
import LogNewAllergy from "./LogNewAllergy";

import { getAllergyLogs } from "../utils/data";


const AllergyPage = () => {
  const [allergies, setAllergies] = useState([]);


  const handleCreate = async (newLog) => {
      setAllergies((prev) => [newLog, ...prev]);
    }

  useEffect(() => {
    const getAllergies = async () => {
        try {
            const info = await getAllergyLogs();
            setAllergies(info);
            } catch(error) {
            console.error("Failed to get logs", error);
            }
    };
    getAllergies();
  }, []);

  return (
    <div className=" max-w-4x1 mx-auto p-6 bg-cyan-50 min-h-[calc(100vh-10rem)]">
      <h2 className="text-2xl font-bold text-center text-teal-900 border p-4">
        Your Allergy Logs
      </h2>
      <LogNewAllergy onCreate={handleCreate} />
      {allergies.length === 0 ? (
        <p className="text-center text-teal-900 mt-8">
          No allergies logged yet
        </p>
      ) : (
        <div className="mt-6 space-y-6">
          {allergies.map((log) => (
            <div
              key={log.id}
              className="bg-yellow-50 w-100 flex-row px-4 py-3 rounded-lg shadow border border-yellow-300 shadow-sm"
            >
              <p className="text-lg font-semibold mb-2 text-gray-800">
                {log.trigger}
              </p>
              <p className="text-gray-600 mt-1">
                Severity: {log.severity}
              </p>
              <p className="text-gray-600 mt-1">
                Duration: {log.reaction || "Null"}
              </p>
              <p className="text-gray-600 mt-1">
                Notes: {log.notes || "No notes provided"}
              </p>
              <p className="text-gray-600 my-3">
                Date Logged:
                {log.date
                  ? new Date(log.date).toLocaleDateString()
                  : "Unknown"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
)};

export default AllergyPage;
