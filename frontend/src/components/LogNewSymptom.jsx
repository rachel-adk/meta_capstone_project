import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { newSymptomLog } from "../utils/data";

const LogNewSymptom = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [symptom, setSymptom] = useState("");
  const [severity, setSeverity] = useState(1);
  const [duration, setDuration] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptom) return alert("Symptom cannot be empty");

    setIsSubmitting(true);

    try {
      const newSymptom = {
        name: symptom,
        severity,
        duration,
        notes: "",
      };
      const savedSymptom = await newSymptomLog(newSymptom);

      onCreate(savedSymptom);

      // Resetting form
      setSymptom("");
      setSeverity(1);
      setDuration(0);
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to save symptom:", error);
      alert("Failed to save symptom. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-teal-700 text-white py-2 px-4 rounded"
      >
        + Log Symptom
      </button>

      {/* Modal display */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-teal-900 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              x
            </button>

            <h2 className="text-xl font-semibold mb-4">Log a new symptom</h2>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <DropdownMenu value={symptom} onSelect={setSymptom} />

              <div>
                <label className="block mb-1">Severity: {severity}</label>

                <input
                  type="range"
                  min="1"
                  max="5"
                  value={severity}
                  onChange={(e) => setSeverity(+e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block mb-1">Duration: {duration}</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={duration}
                  onChange={(e) => setDuration(+e.target.value)}
                  className="w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-600"
              >
                {" "}
                Log Symptom
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LogNewSymptom;
