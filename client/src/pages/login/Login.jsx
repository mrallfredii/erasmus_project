import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const {login} = useContext(AuthContext);

  //login
  const handleLogin = () => {
    login();
  }

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
            <button onClick={handleLogin}>
              Login
            </button> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;