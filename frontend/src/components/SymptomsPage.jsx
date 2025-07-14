import { useEffect, useState } from "react";
import LogNewSymptom from "./LogNewSymptom";
import DiagnosisModal from "./DiagnosisModal";
import { getDiagnosis } from "../utils/data";
import ProfilePage from "./ProfilePage";



import { getSymptomLogs } from "../utils/data";


const SymptomsPage = ({ profile, setSymptoms }) => {
  const [showModal, setShowModal] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState(null)

  const handleDiagnosis = async () => {
    try {
      const res = await getDiagnosis({
        age: profile.age,
        gender: profile.gender,
        weight: profile.weight,
        height: profile.height,
        symptoms: setSymptoms
      })
      setDiagnosisResult(res)
      setShowModal(true)
    } catch (error) {
      console.error("Failed to get diagnosis", error)
    }
    }
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
    <div className="max-w-4x1 mx-auto p-6 bg-cyan-50 h-screen">
      <h2 className="text-2xl font-bold text-center text-teal-900 border p-4">
        Your Symptom Logs
      </h2>
      <button onClick={handleDiagnosis}
      className="bg-teal-700 text-white hover:ng-teal-900 rounded px-2 py-2 mt-4 align-left">
      Get a Diagnosis
      </button>
      <LogNewSymptom onCreate={handleCreate} />
      {symptoms.length === 0 ? (
        <p className="text-center uppercase text-teal-900 mt-8">
          No symptoms logged yet
        </p>
      ) : (
        <div className="flex flex-wrap gap-4 py-4 justify-center">
          {symptoms.map((log) => (
            <div
              key={log.id}
              className="bg-yellow-50 w-100 flex-row px-4 py-3 rounded-lg shadow border border-yellow-300 shadow-sm"
            >
              <p className="text-lg uppercase font-semibold mb-2 text-gray-800">
                {log.symptom}
              </p>
              <p className="text-gray-600 mt-1">
                Severity: {log.severity}
              </p>
              <p className="text-gray-600 mt-1">
                Frequency: {log.frequency || "Null"}
              </p>
              <p className="text-gray-600 my-3">
                Date Logged:
                {log.date
                  ? new Date(log.date).toLocaleDateString()
                  : "Unknown"}
              </p>
            </div>


          ))}
          <DiagnosisModal />
        </div>
      )}
    </div>
)};

export default SymptomsPage;
