import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import MedicalHistory from "./components/MedicalHistory";
import SymptomsPage from "./components/SymptomsPage";
import AllergiesPage from "./components/AllergiesPage";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ProfilePage from "./components/ProfilePage";
import HospitalsPage from "./components/HospitalsPage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    age: 0,
    weight: 0,
    height: 0,
    gender: "",

    preExistingConditions: [],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-teal-50">
        <p className="text-4xl font-bold text-teal-600 text-center"> ⏳ LOADING...</p>
      </div>
    );
  }



  return (
    <>
      <div className="flex flex-col w-full">
        <Router>
          <header className="bg-teal-700 flex justify-center items-center p-8">
            <h1 className="text-white text-6xl font-bold">
              🩺 HealthConnect 🩺
            </h1>
          </header>
          <h2 className="text-4xl font-bold text-center my-7 text-teal-800">
            Your Personal Health Tracking Companion
          </h2>

          <div className="flex">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <main
              className={`flex-grow h-screen transition-all duration-300 ${
                isOpen ? "ml-60" : "ml-0"
              }`}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/med_history" element={<MedicalHistory />} />
                <Route
                  path="/symptoms"
                  element={<SymptomsPage profile={profile} />}
                />
                <Route path="/allergies" element={<AllergiesPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/hospitals" element={<HospitalsPage />} />
                <Route
                  path="/profile"
                  element={
                    <ProfilePage profile={profile} setProfile={setProfile} />
                  }
                />
              </Routes>
              <div className="bg-teal-700 text-white py-2 px-3 text-left sticky bottom-0">
                <p>©2025 HealthConnect</p>
              </div>
            </main>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
