import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // let text_dict = {};
    // text_dict["firstName"] = ["First Name", "Invalid Name"];
    // text_dict["email"] = ["Email Address", "Invalid Email"];
    // text_dict["password"] = ["Password", "Invalid Password"];
    const data = new FormData(e.currentTarget);
    let validate = true;

    data.forEach((value, key) => {
      const element = document.getElementById(key);
      console.log(element, key);
      if (key === "firstName") {
        if (!value) {
          validate = false;
          element.innerHTML = "First Name : empty";
        } else if (!value.match(/^[a-zA-Z]+$/)) {
          validate = false;
          element.innerHTML = "First Name : only letters possible";
        } else {
          element.innerHTML = "First Name";
        }
      } else if (key === "email") {
        if (!value) {
          validate = false;
          element.innerHTML = "Email Address : empty";
        } else if (
          !value.indexOf("@") ||
          !value.indexOf(".") ||
          value.split("@").length > 2 ||
          value.split(".").length > 2
        ) {
          validate = false;
          element.innerHTML = "Email Address : not email form";
        } else {
          element.innerHTML = "Email Address";
        }
      } else {
        if (!value) {
          validate = false;
          element.innerHTML = "Password : empty";
        } else {
          element.innerHTML = "Password";
        }
      }
    });

    if (validate) {
      navigate("/success", {
        state: {
          firstName: data.get("firstName"),
          email: data.get("email"),
          password: data.get("password"),
        },
      });
    }
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
        <label className="label" id="firstName">
          First Name
        </label>
        <input className="input" type="text" name="firstName" required />

        <label className="label" id="email">
          Email Address
        </label>
        <input className="input" type="email" name="email" required />

        <label className="label" id="password">
          Password
        </label>
        <input className="input" type="password" name="password" required />
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
