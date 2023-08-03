import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        {/* LEFT */}
        <div className="left">
          <h1>
            HELLO
          </h1>
          <p>
            Welcome back! Hope you find a place to hang out.
            Or just share where you just been!
          </p>
          <span>
            New here? Register now to enroll with your new city
          </span>
          {/* Link to register */}
          <Link to="/register">
            <button>
              Register
            </button>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="right">
          <h1>
            LOGIN
          </h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>
              Login
            </button> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;