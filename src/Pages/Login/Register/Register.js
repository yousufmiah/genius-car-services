import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  };

  return (
    <div className="register-form">
      <h2 className="text-center mt-5">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger text-decoration-none "
          onClick={navigateLogin}
        >
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Register;
