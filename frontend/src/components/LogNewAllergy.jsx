import { useState } from "react";

const LogNewAllergy = ({ onCreate }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    trigger: "",
    reaction: "",
    date: "",
    severity: 0,
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
      const response = await fetch("http://localhost:3000/allergies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to create new log");

      const data = await response.json();
      onCreate(data);
      setShowModal(false);
      setFormData({
        trigger: "",
        reaction: "",
        date: "",
        severity: "",
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
        + Add a New Allergy Log
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold font-semibold text-center text-teal-700 mb-4">
              Log New Allergy
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Allergies</label>
                <input
                  name="trigger"
                  value={formData.trigger}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 focus:ring"
                />
              </div>
              <div>
                <label className="block text-gray-700">Reaction: </label>
                <input
                  name="reaction"
                  value={formData.reaction}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 focus:ring"
                />
              </div>
              <div>
                <label className="block text-gray-700">Severity: </label>
                <input
                  name="severity"
                  type= "number"
                  value={formData.severity}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 focus:ring"
                />
              </div>
              <div>
                <label className="block text-gray-700">Notes: </label>
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

export default LogNewAllergy;
