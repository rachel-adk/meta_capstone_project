import { useState, useEffect } from "react";




function DropdownMenu({ onSelect }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("");
  const [allSymptoms, setAllSymptoms] = useState([]);
  const [logs, setLogs] = useState([])
  const [severity, setSeverity] = useState(0);
  const [frequency, setFrequency] = useState(0);

  useEffect(() => {
    async function fetchSymptoms() {
      try {
        const res = await fetch("/data/frontendConditions.json");
        const data = await res.json();

        const symptoms = data.flatMap(obj => obj.symptoms || [])
        const uniqueSymptoms = [...new Set(symptoms)];

          setAllSymptoms(uniqueSymptoms);

      } catch (error) {
        console.error("Failed to fetch symptoms:", error);
      }
    }
    fetchSymptoms();
  }, []);

  const filteredSymptoms = allSymptoms.filter(symptom =>
    symptom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = e => {
    setSelected(e.target.value);
    if (onSelect) onSelect(e.target.value)
  }
  

  return (
    <div className="p-4 max-w mx-auto">
        <input
        type="text"
        placeholder="Search symptoms..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="border rounded p-2 w-full mb-2"
      />
      <label htmlFor="symptomSelection" className="block mb-2 font-medium">
        Choose a symptom:
      </label>
      <select
        id="symptomSelection"
        type="text"
        value={selected}
        onChange={handleSelect}
        className="border rounded p-2 w-full"
      >
        <option value="" disabled>
          -- Choose one symptom --
        </option>
        {filteredSymptoms.map(symptom => (
          <option key={symptom} value={symptom}>
            {symptom}
          </option>
        ))}
      </select>
    </div>
  );
}
export default DropdownMenu;
