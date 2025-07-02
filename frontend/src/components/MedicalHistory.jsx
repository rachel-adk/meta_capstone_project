import { useEffect, useState } from "react";

import { getMedicalHistory } from "../utils/data";
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

        const handleCreate = async (newEntries) => {
            try {
                await newMedicalEntry(newEntries, userId);
                const newEntries = await getMedicalHistory(userId);
                setEntries(newEntries);
            } catch(error) {
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
        setEntries(info)
        };
        getEntries();

    }, []);


  return (
    <div className=" max-w-4x1 mx-auto p-6 bg-cyan-50 min-h-[calc(100vh-10rem)]">
      <h2 className="text-2xl font-bold text-center text-teal-900 border p-4">Your Medical History</h2>
      <h2 className="text-1xl text-center text-teal-900 border py-1 my-1">Track your past medical conditions here</h2>
      <CreateNewEntry onCreate={handleCreate} />
       {entries.length === 0 ? (
      <p className="text-center text-teal-900 border-3 py-5 my-9">No entries found</p> ) : (
            <div className="w-full flex flex-row gap-5 justify-center">
            <div className="w-full max-w-md bg-white p-4 rounded-xl w-80 shadow-xl flex-row flex-wrap justify center gap-4">
            {entries.map((entry) => (
                <div
                 key={entry.id}
                 className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-lg transition duration-200 ">
                 <h3 className="text-lg font-bold mb-2 text-red uppercase">{entry.condition}</h3>
                 <p className="text-gray-700 my-4">Medication:{entry.medications}</p>
                <p className="text-gray-700 my-3">Diagnosed: {entry.Diagnosisdate ? new Date(entry.diagnosisDate).toLocaleDateString() : "Unknown"}</p>
                <p className="text-gray-700">Notes: {entry.notes}</p>

                </div>
            ))}
            </div>
            </div>
        )}
    </div>
  );
};



export default MedicalHistory;
