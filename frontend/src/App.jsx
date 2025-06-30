import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Router>
        <header className="bg-teal-700 flex justify-center items-center p-8">
          <h1 className="text-white text-6xl font-bold">🩺 HealthConnect 🩺</h1>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
          <div className="bg-teal-700 text-white py-2 px-3 text-left">
            <p>2025 HealthConnect</p>
          </div>
        </main>
      </Router>
    </div>
  );
};

export default App;
