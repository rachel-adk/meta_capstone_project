import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <main>
          <header>
            <h1>🩺 HealthConnect 🩺</h1>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
          <div className="footer">
            <p>Copyright 2025</p>
          </div>
        </main>
      </Router>
    </div>
  );
};

export default App;
