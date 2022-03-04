import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location) navigate("/");
  return (
    <div className="success">
      <h1>
        Welcome, <br />
        <b>{location.state.firstName}!</b>
      </h1>
      <p>
        You have been registered for this awesome service. Please check your
        email listed below for instructions.
      </p>
      <p>
        <b>{location.state.email}</b>
      </p>

      <button className="button" type="button">
        Sign In
      </button>
    </div>
  );
};

export default Success;
