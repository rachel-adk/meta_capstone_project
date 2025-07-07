import { useState } from "react";


const CreateNewEntry = ({ onCreate }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    condition: "",
    medications: "",
    diagnosisDate: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/med_history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to create new entry");

      const data = await response.json();
      onCreate(data);
      setShowModal(false);
      setFormData({
        condition: "",
        medications: "",
        diagnosisDate: "",
        notes: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-600"
      >
        + Add a New Entry
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold font-semibold text-center text-teal-700 mb-4">
              Create New Entry
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Condition</label>
                <input
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 focus:ring"
                />
              </div>
              <div>
                <label className="block text-gray-700">Medication: </label>
                <input
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 focus:ring"
                />
              </div>
              <div>
                <label className="block text-gray-700">Diagnosis Date:</label>
                <input
                  type="date"
                  name="diagnosisDate"
                  value={formData.diagnosisDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 focus:ring"
                />
              </div>
              <div>
                <label className="block text-gray-700">Notes:</label>
                <input
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 focus:ring"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateNewEntry;
