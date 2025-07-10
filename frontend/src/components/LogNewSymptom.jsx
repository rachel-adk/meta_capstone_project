import { useState } from "react";


const LogNewSymptom = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [symptom, setSymptom] = useState("")
  const [severity, setSeverity] = useState(1)
  const [frequency, setFrequency] = useState("daily");

  const handleSubmit = e => {
    e.preventDefault()
    if (!symptom) return alert("Symptom cannot be empty")
    onSubmit({symptom: symptom, severity, frequency})
    setSymptom("")
    setSeverity(1)
    setFrequency("daily")
    setIsOpen(false)
}

  return (
    <>
    <button
    onClick={() => setIsOpen(true)}
    className="bg-teal-600 text-white oy-2 px-4 rounded"
    >
      + Log Symptom
    </button>

    {/* Modal display */}
    {isOpen && (
      <div
      className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
      >
      <div
      className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full p-6 relative"
      onClick={e => e.stopPropagation()}
      >
      <button
      className="absolute top-2 right-2 text-teal-900 hover:text-teal-600"
      onClick={() => setIsOpen}
      aria-label="Close modal"
      >
        x
      </button>

      <h2 className="text-xl font-semibold mb-4">Log a new symptom</h2>
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <DropdownMenu
      allSymptoms="/backend/data/conditions.json"
      value={symptom}
      onSelect={setymptom} />

      <div>
        <label className="block mb-1">Severity: {severity}</label>

        <input
          type="range"
          min="1"
          max="5"
          value={severity}
          onChange={e => setSeverity(+e.target.value)}
          className="w-full"
          />
      </div>
      <div>
        <label className="block mb-1">Severity: {severity}</label>
        <select
        value={frequency}
        onChange={e => setFrequency(e.target.value)}
        className="border rounded p-2 w-full"
        >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        </select>
      </div>
      <button
      type="submit"
      className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-600"
      > Log Symptom
      </button>

    </form>
    </div>
    </div>
    )}

    </>
  )}



export default LogNewSymptom;
