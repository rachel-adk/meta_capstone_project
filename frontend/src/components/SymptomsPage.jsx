import { useEffect, useState } from "react";
import LogNewSymptom from "./LogNewSymptom";

import { getSymptomLogs } from "../utils/data";


const SymptomsPage = () => {
  const [symptoms, setSymptoms] = useState([]);


  const handleCreate = async (newLog) => {
      setSymptoms((prev) => [newLog, ...prev]);
    }

  useEffect(() => {
    const getSymptoms = async () => {
        try {
            const info = await getSymptomLogs();
            setSymptoms(info);
            } catch(error) {
            console.error("Failed to get logs", error);
            }
    };
    getSymptoms();
  }, []);

  return (
    <div className=" max-w-4x1 mx-auto p-6 bg-cyan-50 min-h-[calc(100vh-10rem)]">
      <h2 className="text-2xl font-bold text-center text-teal-900 border p-4">
        Your Symptom Logs
      </h2>
      <LogNewSymptom onCreate={handleCreate} />
      {symptoms.length === 0 ? (
        <p className="text-center text-teal-900 mt-8">
          No symptoms logged yet
        </p>
      ) : (
        <div className="mt-6 space-y-6">
          {symptoms.map((log) => (
            <div
              key={log.id}
              className="bg-yellow-50 w-100 flex-row px-4 py-3 rounded-lg shadow border border-yellow-300 shadow-sm"
            >
              <p className="text-lg font-semibold mb-2 text-gray-800">
                {log.name}
              </p>
              <p className="text-gray-600 mt-1">
                Severity: {log.severity}
              </p>
              <p className="text-gray-600 mt-1">
                Duration: {log.duration || "Null"}
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

export default SymptomsPage;
