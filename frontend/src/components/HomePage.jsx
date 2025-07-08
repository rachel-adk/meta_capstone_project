import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (

    <div className="h-screen flex justify-center items-center bg-cyan-50 ">
      <h1 className="text-2xl absolute -mt-220 text-teal-900">Take control of your health journey with us! </h1>
      <h1 className="text-2xl text-center absolute -mt-200 text-teal-900">Track symptoms, manage medical history, and keep all your health information organized in one secure place.  </h1>

      <div className="bg-white rounded-xl shadow-xl py-8 px-25 flex flex-col place-items-center gap-5 -mt-50">
        <h1 className="text-6x1 font-bold uppercase text-[#1b8699] border-[2px] border-b-2 border-teal-400 p-2 my-2">
          Get Started!
        </h1>

        <Link
          to="/signup"
          className="inline-block bg-cyan-700 hover:bg-cyan-500 border-[3px] border-cyan-700 text-white text-lg font-semibold uppercase py-3 px-6 m-7 rounded-md shadow-md text-center transition duration-300"
        >
          Sign Up
        </Link>
        <h1 className="text-6x1 font-bold uppercase text-[#1b8699] border-[2px] border-b-2 border-teal-400 p-2">
         Already have an account?
        </h1>

        <Link
          to="/login"
          className="inline-block bg-cyan-700 hover:bg-cyan-500 border-[3px] border-cyan-700 text-white text-lg font-semibold uppercase py-3 px-6 m-7 rounded-md shadow-md text-center transition duration-300"
        >
          Login
        </Link>
        
      </div>
    </div>
  );
};
export default HomePage;
