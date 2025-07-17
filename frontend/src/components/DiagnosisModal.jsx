import React from "react";

const DiagnosisModal = ({ showModal, onClose, diagnosisResult, symptoms }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20">
      <div className="bg-teal-200 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >

          x
        </button>
        <h2 className="text-xl font-semibold text-teal-900 p-4">Diagnosis</h2>

        {diagnosisResult ? (
          <>
            <h3 className="teal-900 text-center">Summary</h3>
            <p className="mb-2 px-2">Symptoms: </p>
             <ul className="list-disc ml-6">
              {symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
            <p className="mb-2 p-4">Disease: {diagnosisResult.condition}</p>
            <p className="mb-2 p-4">Precautions: </p>
            {/* <ul className="list-disc ml-6">
              {diagnosisResult.precaution.map((precaution, index) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul> */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default DiagnosisModal;
