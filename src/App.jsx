import { FaLinkedin, FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import { useState } from "react";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`container ${isActive ? "right-panel-active" : ""}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebookF />
            </a>
            <a href="#" className="social">
              <FaGooglePlusG />
            </a>
            <a href="#" className="social">
              <FaLinkedin />
            </a>
          </div>
          <span className="text-[12px]">
            or use your email for registration
          </span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1 className="font-bold m-0">Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebookF />
            </a>
            <a href="#" className="social">
              <FaGooglePlusG />
            </a>
            <a href="#" className="social">
              <FaLinkedin />
            </a>
          </div>
          <span className="text-[12px]">or use your account</span>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" />
          <a href="#" className="forgot">
            Forgot your password?
          </a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="font-bold m-0">Welcome Back!</h1>
            <p className=" text-sm font-thin leading-5 tracking-wide my-5 mx-0 mb-7.5">
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" onClick={handleClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="font-bold m-0">Hello, Friend!</h1>
            <p className=" text-sm font-thin leading-5 tracking-wide my-5 mx-0 mb-7.5">
              Enter your personal details and start journey with us
            </p>
            <button className="ghost" onClick={handleClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
