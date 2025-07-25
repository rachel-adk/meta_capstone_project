import { useState } from "react";
import { getHospitals } from "../utils/data";
import HospitalCard from "./HospitalCard";
import MapView from "./MapView";


export default function HospitalsPage() {
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState("");
  const [asked, setAsked] = useState(false);
  const [loc, setLoc] = useState(null);

  // Getting the user's location and displaying the nearby hospitals
  async function handleUseLocation() {
    setAsked(true);
    try {
      const { latitude, longitude } = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve(pos.coords),
          (err) => reject(err.message),
          { enableHighAccuracy: true, timeout: 5000 }
        );
      });
      setLoc({ latitude, longitude });
      const hospitalList = await getHospitals(latitude, longitude);
      setHospitals(hospitalList);
    } catch (err) {
      setError(err);
    }
  }

  if (!asked) {
    return (
      <div className="flex item-center justify-center min-h-screen">
        <div className="text-center p-6">
          <h2 className="text-3xl font-bold text-teal-800 py-5">Find Hospitals Near Your Location</h2>
          <p className="text-lg text-teal-900 py-3">We would like to use your location</p>
          <button
            onClick={handleUseLocation}
            className="bg-teal-500 px-3 py-2 text-white"
          >
            Use my location
          </button>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="p-4 text-red-700">
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className="flex h-screen">
      <aside className="w-1/3 overflow-y-auto p-4 bg-gray-50">
        {hospitals.map((h, index) => (
          <HospitalCard key={index} hospital={h} />
        ))}
      </aside>
      <main className="flex-1">
        <MapView hospitals={hospitals} center = {loc}/>
      </main>
    </div>
  );
}
