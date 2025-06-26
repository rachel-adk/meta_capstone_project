import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1 className="welcome">Welcome!</h1>
        <div className="buttons">
          <button>
            <a href="/signup">Sign Up</a>
          </button>
          <button>
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
     
    </div>

  );
};
export default HomePage;
