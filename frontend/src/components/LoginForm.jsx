import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useUser } from '../contexts/UserContext';
import "./styles/LoginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Login successful!" });
        navigate("/");
      } else {
        setMessage({ type: "error", text: data.error || "Login failed." });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Unable to log in. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] bg-cyan-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4"
      >
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username:
          </label>
        </div>

        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full border border-teal-400 bg-cyan-50 rounded-md px-4 py-2 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-teal-500 focus:border-transparent transition"
        />
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-teal-400 bg-cyan-50 rounded-md px-4 py-2 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-teal-500 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-700 hover:bg-cyan-500 text-white font-semibold uppercase py-2 px-4 rounded-md transition-all duration-300"
        >
          Log In
        </button>

        {message && (
          <div
            className={`mt-2 text-sm text-center ${
              message.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
