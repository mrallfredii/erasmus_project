import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  //state for add user
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  //navigate to home
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //console.log(inputs)

  const { login } = useContext(AuthContext);

  //login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        {/* LEFT */}
        <div className="left">
          <h1>HELLO</h1>
          <p>
            Welcome back! Hope you find a place to hang out. Or just share where
            you just been!
          </p>
          <span>New here? Register now to enroll with your new city</span>
          {/* Link to register */}
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="right">
          <h1>LOGIN</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            ></input>
            {error && error}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
