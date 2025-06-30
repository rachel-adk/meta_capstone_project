import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page refresh
    console.log("User Input:", formData); // Logs user input

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Signup successful!" });
      } else {
        setMessage({ type: "error", text: data.error || "Signup failed." });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Unable to sign up. Please try again.",
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
          Sign Up
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
export default SignupForm;
