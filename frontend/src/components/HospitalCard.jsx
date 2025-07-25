export default function HospitalCard({ hospital }) {
  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition">
      <h2 className="text-2xl font-semibold">{hospital.name}</h2>
      <h3 className="text-lg font-medium">{hospital.address}</h3>
    </div>
  );
}
