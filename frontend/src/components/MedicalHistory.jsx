import { useEffect, useState } from "react";

import { getMedicalHistory, newMedicalEntry } from "../utils/data";
import CreateNewEntry from "./CreateNewEntry";

const MedicalHistory = () => {
  const [entries, setEntries] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const handleDelete = (id) => {
  //     try {
  //         await deleteEntry(id);
  //         setEntries(entries.filter((entry) => entry.id !== id));
  //     } catch (error) {
  //         console.error(error);
  //     }

  const handleCreate = async (newEntry, userId) => {
    try {
      await newMedicalEntry(newEntry);
      const newEntries = await getMedicalHistory(userId);
      setEntries(newEntries);
    } catch (error) {
      console.error(error);
    }
  };

  //     const handleUpdate = async (newEntry) => {
  //         setEntries((prev) =>
  //             prev.map(entry => entry.id === newEntry.id ? newEntry : entry))
  //     }

  useEffect(() => {
    const getEntries = async () => {
      const info = await getMedicalHistory();
      setEntries(info);
    };
    getEntries();
  }, []);

  return (
    <div className="p-6 bg-cyan-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center text-teal-900 border p-4">
        Your Medical History
      </h2>
      <h2 className="text-1xl text-center text-teal-900 border py-1 my-1">
        Track your past medical conditions here
      </h2>
      <CreateNewEntry onCreate={handleCreate} />
      {entries.length === 0 ? (
        <p className="text-center text-teal-900 border-3 py-5 my-9">
          No entries found
        </p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white p-5 w-72 rounded-lg shadow border border-gray-200 hover:shadow-lg transition duration-200 "
            >
              <h3 className="text-lg font-bold mb-2 text-teal-800 uppercase">
                {entry.condition}
              </h3>
              <p className="text-gray-700 my-4">
                Medication:{entry.medications || "None"}
              </p>
              <p className="text-gray-700 my-3">
                Diagnosed:
                {entry.diagnosisDate
                  ? new Date(entry.diagnosisDate).toLocaleDateString()
                  : "Unknown"}
              </p>
              <p className="text-gray-700">Notes: {entry.notes || "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MedicalHistory;
