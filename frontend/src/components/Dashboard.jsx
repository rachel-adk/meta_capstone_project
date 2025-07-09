import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, {user?.name || "User"}</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl mb-2 font-semibold">Your Health Summary</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Age:</strong> {user?.age || "Not set"}
          </li>
          <li>
            <strong>Height:</strong> {user?.height || "Not set"} cm
          </li>
          <li>
            <strong>Weight:</strong> {user?.weight || "Not set"} kg
          </li>
          <li>
            <strong>Pre-existing Conditions:</strong>{" "}
            {user?.conditions?.join(",") || "None"}{" "}
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button
          onClick={() => navigate("/profile")}
          className="bg-teal-600 text-white p-4 rounded-xl shadow hover:bg-teal-700"
        >
          My Profile
        </button>

        <button
          onClick={() => navigate("/med_history")}
          className="bg-teal-600 text-white p-4 rounded-xl shadow hover:bg-teal-700"
        >
          My Medical History
        </button>
        <button
          onClick={() => navigate("/symptoms")}
          className="bg-teal-600 text-white p-4 rounded-xl shadow hover:bg-teal-700"
        >
          Symptoms
        </button>
        <button
          onClick={() => navigate("/allergies")}
          className="bg-teal-600 text-white p-4 rounded-xl shadow hover:bg-teal-700"
        >
          Allergies
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
