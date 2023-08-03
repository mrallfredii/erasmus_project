import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        {/* LEFT */}
        <div className="left">
          <h1>
            HELLO
          </h1>
          <p>
            New here!? Hope you find a place to hang out.
            Or just find where you will go!
          </p>
          <span>
            Already have an account?
          </span>
          {/* Link to login */}
          <Link to="/login">
            <button>
              Login
            </button>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="right">
          <h1>
            REGISTER
          </h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;