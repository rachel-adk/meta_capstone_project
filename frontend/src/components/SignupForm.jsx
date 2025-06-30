import { useState } from "react"



const SignupForm = () => {
    const [formData, setFormData] = useState({ username: "", password: "", })
    const [message, setMessage] = useState("")

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

     // Handle form submission
     const handleSubmit = async (event) => {
        event.preventDefault(); // Prevents page refresh
        console.log("User Input:", formData); // Logs user input

        try {
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setMessage({ type: "success", text: "Signup successful!" })
            } else {
                setMessage({ type: "error", text: data.error || "Signup failed." })
            }
        } catch (error) {
            setMessage({ type: "error", text: "Unable to sign up. Please try again." })
        }
    }

    return (
        <form className="flex flex-col flex w full max width-w-md p-4 bg-white object-center rounded-xl shadow-xl absolute top-1/3 left-1/2 right-1/8 -translate-x-1/2 -translate-y-1/8 outline md:outline-cyan-700"
            onSubmit={handleSubmit}>
            <label class="p-5 text-left"
                htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            <label class="p-5"
            htmlFor="password">Password: </label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <button class="bg-cyan-700 hover:bg-cyan-900 focus:outline-2 text-stone-50 m-8"
            type="submit">Sign Up</button>

        {message && (
            <div className={`message ${message.type}`}>
                {message.text}
            </div>
        )}
        </form>

    )

}
export default SignupForm
