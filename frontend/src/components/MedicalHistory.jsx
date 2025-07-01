import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMedicalHistory } from "../utils/data";

const MedicalHistory = () => {
  const { id: userId } = useParams();
  const [entries, setEntries] = useState([]);

  //   const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevState) => ({
    //       ...prevState,
    //       [name]: value,
    //     }));
    //   };

    //   const handleDelete = (id) => {
    //     try {
    //         await deleteEntry(id);
    //         setEntries(entries.filter((entry) => entry.id !== id));
    //     } catch (error) {
    //         console.error(error);
    //     }

        // const handleCreate = async (newEntries) => {
        //     try {
        //         await newMedicalEntry(newEntries, userId);
        //         const newEntries = await getMedicalHistory(userId);
        //         setEntries(newEntries);
        //     } catch(error) {
        //         console.error(error);
        //     }
        // };

    //     const handleUpdate = async (newEntry) => {
    //         setEntries((prev) =>
    //             prev.map(entry => entry.id === newEntry.id ? newEntry : entry))
    //     }

  useEffect(() => {
    if (!userId) return;
    getMedicalHistory(userId)
      .then((data) => setEntries(data))
      .catch(console.error);
  }, [userId]);

  return (
    <div className=" max-w-4x1 mx-auto p-6 bg-cyan-50 min-h-[calc(100vh-10rem)]">
      <h2 className="text-2xl font-bold text-center text-teal-900 border p-4">Your Medical History</h2>
      <h2 className="text-1xl text-center text-teal-900 border py-1 my-1">Track your past medical conditions here</h2>
      <button
          type="submit"
          className="bg-teal-600 hover:bg-cyan-500 text-white font-semibold uppercase py-2 px-4 my-4 rounded-md transition-all duration-300"
        >
          + Add new entry
         </button>
       {entries.length === 0 ? (
      <p className="text-center text-teal-900 border-3 py-5 my-9">No entries found</p> ) : (
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl flex flex-col gap-2">
            {entries.map((entry) => (
                <div
                 key={entry.id}
                 className="bg-white p-5 rounded-lg shadow border border-gray-200 hover:shadow-lg transition duration-200">
                 <h3 className="text-lg font-bold mb-2">{entry.condtion}</h3>
                 <p className="text-gray-700">Medication:{entry.medication}</p>
                <p className="text-gray-700">Diagnosed: {new Date(entry.Diagnosisdate).toLocaleDateString()}</p>
                <p className="text-gray-700">{entry.notes}</p>

                </div>
            ))}
            </div>
        )}
    </div>
  );
};



export default MedicalHistory;
