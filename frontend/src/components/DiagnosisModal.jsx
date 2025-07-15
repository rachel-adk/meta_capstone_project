import React from "react";

const DiagnosisModal = ({ showModal, setModal, diagnosisResult }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20">
      <div className="bg-teal-600 rounded-lg w-full max-w-md relative">
        <button
          onClick={() => setModal(false)}
          className="absolute top-2 right-2 text-gray-500"
        >
          {" "}
          ❌{" "}
        </button>
        <h2 className="text-xl font-semibold text-teal-700">Diagnosis</h2>

        {diagnosisResult ? (
          <>
            <p className="mb-2">Disease: {diagnosisResult.condition}</p>
            <p className="mb-2">Precautions: </p>
            <ul className="list-disc ml-6">
              {diagnosisResult.precaution.map((precaution, index) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
export default DiagnosisModal;
