import { useState, useEffect } from "react";


function DropdownMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataFromBackend, setDataFromBackend] = useState([]);
  const [allSymptoms, setAllSymptoms] = useState([]);

  useEffect(() => {
    async function fetchSymptoms() {
      try {
        const res = await fetch("/backend/data/conditions.json");
        const data = await res.json();

        const symptoms = Object.values(data)
          .flatMap((obj) => obj.condition || [])
          .map((entry) => entry.name);

        setAllSymptoms(symptoms);
      } catch (error) {
        console.error("Failed to fetch symptoms:", error);
      }
    }
    fetchSymptoms();
  }, []);

  const filteredSymptoms = allSymptoms.filter((symptom) =>
    symptom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w mx-auto">
      <label htmlFor="symptomSelection" className="block mb-2 font-medium">
        Choose a symptom:
      </label>
      <select
        id="symptomSelection"
        type="text"
        value={selected}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded p-2 w-full"
      >
        <option value="" disabled>
          -- Choose one symptom --
        </option>
        {filteredSymptoms.map((symptom) => (
          <option key={symptom} value={symptom}>
            {symptom}
          </option>
        ))}
      </select>
    </div>
  );
}
export default DropdownMenu;
