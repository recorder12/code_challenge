import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location) navigate("/");

  const firstName = "{" + location.state.firstName + "}!";
  const email = "{" + location.state.email + "}";
  return (
    <div className="success">
      <h1>
        Welcome, <br />
        <b>{firstName}</b>
      </h1>
      <p>
        You have been registered for this awesome service. Please check your
        email listed below for instructions.
      </p>
      <p>
        <b>{email}</b>
      </p>

      <button className="button" id="signIn" type="button">
        Sign In
      </button>
    </div>
  );
};

export default Success;
