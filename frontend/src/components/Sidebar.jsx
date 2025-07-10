import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { logout } from "../utils/data";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUser()

  const handleLogout = async () => {
    try{
        await logout();
        setUser(null);
    } catch(err) {
        console.error("Logout failed:",err)
    }
  }

//   useEffect(() => {
//     if (!user) {
//         navigate("/signup", { replace: true });
//     }
//   }, [user, navigate])

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-teal-300 text-white p-2 rounded-md hover:bg-teal-800 w-10 flex-row"
      >
        {" "}
        🟰{" "}
      </button>

      <div
        className={`h-screen bg-white border-r border-gray-200 shadow transition-all duration-300 ease-in-out ${
          isOpen ? "w-70" : "w-0"
        } overflow-hidden`}
      >
        <div className="p-6 flex flex-col gap-4">
          <button
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            className="text-left text-teal-700 hover:bg-teal-100 px-3 py-2 rounded"
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/med_history");
              setIsOpen(false);
            }}
            className="text-left text-teal-700 hover:bg-teal-100 px-3 py-2 rounded"
          >
            Medical History
          </button>
          <button
            onClick={() => {
              navigate("/symptoms");
              setIsOpen(false);
            }}
            className="text-left text-teal-700 hover:bg-teal-100 px-3 py-2 rounded"
          >
            Symptoms
          </button>

          <button
            onClick={() => {
              navigate("/allergies");
              setIsOpen(false);
            }}
            className="text-left text-teal-700 hover:bg-teal-100 px-3 py-2 rounded"
          >
            Allergies
          </button>

          <div className="bottom-6 left-6">
            <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-lg">
                    Logout
                </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
