import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {

  //state for add user
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value }));
  };
  //console.log(inputs)

  //register req API req
  const handleClick = async (e) => {
    e.preventDefault()
    //axios
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      setError(error.response.data);
    }
  };
  console.log(error)

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
            <input type="text" placeholder="Username" name="username" onChange={handleChange}></input>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}></input>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}></input>
            {error && error}
            <button onClick={handleClick}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;