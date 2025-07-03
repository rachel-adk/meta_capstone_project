import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex justify-center items-center bg-cyan-50 ">
      <div className="bg-white rounded-xl shadow-xl py-15 px-25 flex flex-col items-center gap-12">
        <h1 className="text-6x1 font-bold uppercase text-[#1b8699] border-[2px] border-b-2 border-teal-400 p-6">
          Welcome!
        </h1>

        <Link
          to="/signup"
          className="inline-block bg-cyan-700 hover:bg-cyan-500 border-[3px] border-cyan-700 text-white text-lg font-semibold uppercase py-3 px-6 m-7 rounded-md shadow-md text-center transition duration-300"
        >
          Sign Up
        </Link>

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
