import { useEffect, useState } from "react";
import LogNewSymptom from "./LogNewSymptom";
import DiagnosisModal from "./DiagnosisModal";
import { getDiagnosis } from "../utils/data";
import ProfilePage from "./ProfilePage";

import { getSymptomLogs } from "../utils/data";

const SymptomsPage = ({ profile }) => {
  const [symptoms, setSymptoms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState(null);

  const handleDiagnosis = async () => {
    try {
      const res = await getDiagnosis({
        age: profile.age,
        gender: profile.gender,
        weight: profile.weight,
        height: profile.height,
        symptoms,
        weeklyExercise: profile.weeklyExercise,
        stressLevel: profile.stressLevel,
        sleepQuality: profile.sleepQuality,
        smoking: profile.smoking,
        AlcoholPerWeek: profile.AlcoholPerWeek
      });
      console.log("Diagnosis results:", JSON.stringify(res, null, 2))
      setDiagnosisResult(res);
      setShowModal(true);
    } catch (error) {
      console.error("Failed to get diagnosis", error);
    }
  };
  const handleCreate = async (newLog) => {
    setSymptoms((prev) => [newLog, ...prev]);
  };

  useEffect(() => {
    const getSymptoms = async () => {
      try {
        const info = await getSymptomLogs();
        setSymptoms(info);
      } catch (error) {
        console.error("Failed to get logs", error);
      }
    };
    getSymptoms();
  }, []);

  return (
    <div className="min-h-screen bg-teal-50 py-8">
      <div className="max-w-9xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-900 mb-2">
            Symptom Logs
          </h1>
          <p className="text-teal-700">Track your symptoms and get insights</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={handleDiagnosis}
            className="bg-teal-700 text-white hover:ng-teal-900 rounded px-2 py-2 mt-4 align-left"
          >
            Get a Diagnosis
          </button>
        </div>
        <div className="mb-8">
          <LogNewSymptom onCreate={handleCreate} />
        </div>

        {symptoms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-center uppercase text-teal-900 mt-8">
              No symptoms logged yet
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((log) => (
              <div
                key={log.id}
                className="bg-yellow-50 rounded-lg border-yellow-200 p-6 hover:shadow-lg hover:border-yellow-300 transition-all"
              >
                <h3 className="text-lg uppercase font-semibold mb-3 text-yellow-900">
                  {log.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-yellow-800">
                    <span className="font-medium">Severity:</span>{" "}
                    {log.severity}/5
                  </p>
                  <p className="text-yellow-800">
                    <span className="font-medium">Frequency:</span>{" "}
                     {log.duration || "Null"} hours
                  </p>
                  <p className="text-yellow-600 pt-2 border-t border-yellow-100">
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

        {showModal && (
          <DiagnosisModal
            showModal={showModal}
            setShowModal={setShowModal}
            diagnosisResult={diagnosisResult}
            symptoms={symptoms}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};
export default SymptomsPage;
