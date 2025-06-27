import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";
// import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="w-screen h-[85%] flex justify-center items-center " >
      <div className="flex flex-col items-center gap-[175px] py-6 my-12 h-80%">
        <h1 className="text-3x1 uppercase text-[#1b8699] border-[2px] border-[#c9dee6] p-6">
            Welcome!</h1>

        <Link
        to="/signup"
        className="inline-block bg-cyan-700 hover:bg-cyan-500 border-[3px] border-cyan-700 text-white text-lg font-semibold uppercase py-3 px-6 m-7 rounded-md shadow-md text-center transition duration-300">
        Sign Up
        </Link>

        <Link
         to="/login"
        className="bg-cyan-700 text-white uppercase py-3 px-4 m-2">
       Login
        </Link>



    </div>

    </div>

  );
};
export default HomePage;
