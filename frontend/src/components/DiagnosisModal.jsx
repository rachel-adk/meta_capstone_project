import React from "react";

const DiagnosisModal = ({ showModal, onClose, diagnosisResult, symptoms }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20">
      <div className="bg-teal-100 rounded-lg w-full max-w-md relative p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-rose-500 font-bold p-3"
        >
          x
        </button>
        <h2 className="text-2xl text-center font-bold text-teal-900 p-4">Possible Diagnosis</h2>

        {diagnosisResult && diagnosisResult.diagnoses ? (
          <>
          <div className="px-4 pb-4"></div>
            <h3 className="text-teal-900 text-center font-bold text-2xl m-1">Summary</h3>
            <div className="mb-4">
            <p className="mb-2 font-semibold text-xl text-teal-900">Symptoms: </p>
             <ul className="list-disc ml-6">
              {symptoms.map((symptomObj, index) => (
                <li key={index}>
                    {typeof symptomObj === 'string' ? symptomObj : symptomObj.symptom || symptomObj.name}
                    </li>
              ))}
            </ul>
            </div>
            <p className="mb-2 px-2 py-2 font-semibold text-xl text-teal-900">Possible Conditions: </p>
            {diagnosisResult.diagnoses.map((diagnosis, index) =>
            (<div key={index} className="mb-4 p-3 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold text-teal-900">{index+ 1}{". "}{diagnosis.condition.toUpperCase()}</h4>
                <div className="mt-2 text-sm">
                    <p>
                        <span className="font-medium">Confidence:</span>{" "}
                        <span className={`font-bold ${
                            diagnosis.confidence > 0.7 ? 'text-red-600' :
                            diagnosis.confidence > 0.5 ? 'text-yellow-600' :
                            'text-green-600'
            }`}>
                {(diagnosis.confidence * 100).toFixed(0)}%
            </span>
                    </p>

            <p className="mt-2">
                <span className="font-medium">Recommended Action:</span>{" "}
                <span className={`font-bold ${
                    diagnosis.recommendedAction === 'Seek immediate medical attention' ? 'text-red-600' :
                    diagnosis.recommendedAction === 'Consult a doctor' ? 'text-yellow-600' :
                    'text-green-600'
                }`}>
                {diagnosis.recommendedAction}
                </span>
                </p>
                </div>
                </div>

                ))}




          </>
        ) : (
          <p>Loading diagnosis results...</p>
        )}
      </div>
    </div>
  );
};
export default DiagnosisModal;
