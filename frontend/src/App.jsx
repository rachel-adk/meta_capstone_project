import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import MedicalHistory from "./components/MedicalHistory";
import SymptomsPage from "./components/SymptomsPage";
import AllergiesPage from "./components/AllergiesPage";
import Sidebar from "./components/Sidebar";


const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Router>
        <header className="bg-teal-700 flex justify-center items-center p-8">
          <h1 className="text-white text-6xl font-bold">🩺 HealthConnect 🩺</h1>
        </header>


        <div className="flex">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
        className={`flex-grow transition-all duration-300 ${
          isOpen ? "ml-60" : "ml-0"
        }`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/med_history" element={<MedicalHistory />} />
            <Route path="/symptoms" element={<SymptomsPage />} />
            <Route path="/allergies" element={<AllergiesPage />} />
          </Routes>
          <div className="bg-teal-700 text-white py-2 px-3 text-left">
            <p>©2025 HealthConnect</p>
          </div>
        </main>
        </div>
      </Router>
      </div>
    );




};

export default App;
