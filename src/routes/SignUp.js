import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    navigate("/success", {
      state: {
        firstName: data.get("firstName"),
        email: data.get("email"),
        password: data.get("password"),
      },
    });
  };

  return (
    <div className="signUp">
      <h1>
        Let's
        <br />
        <b>Sign Up</b>
      </h1>
      <p>
        Use the form below to sign up for this super awesome service. You're
        only a few steps away!
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <label className="label">First Name</label>
        <input
          className="input"
          id="firstName"
          name="firstName"
          type="text"
          required
        />
        <label className="label">Email Address</label>
        <input
          className="input"
          id="email"
          type="email"
          name="email"
          required
        />
        <label className="label">Password</label>
        <input
          className="input"
          id="password"
          type="password"
          name="passwowrd"
          required
        />
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
