import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";


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
        navigate("/med_history");
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
    <div className="h-screen bg-cyan-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl flex flex-col gap-4 -mt-60"
      >
         <h1 className="text-8x1 font-semibold uppercase text-teal-700 text-center">
          Welcome back!
        </h1>
        <h1 className="text-8x1 font-semibold text-teal-700 text-center">
          Sign into your account here!
        </h1>

        <div>
          <label
            htmlFor="username"
            className="block text-sm py-0 font-medium mb-1 text-teal-700"
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
            className="block text-sm font-medium mb-1 py-2 text-teal-700"
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
        <Link
          to="/signup"
          className="border rounded hover:bg-cyan-50 text-teal-700 text-lg py-3 text-center transition duration-300"
        >
          Don't have an account? Sign up here!
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
