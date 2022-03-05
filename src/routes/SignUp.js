import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    let validate = true;

    data.forEach((value, key) => {
      const element = document.getElementById(key);
      if (key === "firstName") {
        if (!value) {
          validate = false;
          element.style.color = "red";
          element.innerHTML = "First Name : Empty";
        } else if (!value.match(/^[a-zA-Z]+$/)) {
          validate = false;
          element.style.color = "red";
          element.innerHTML = "First Name : Only letters possible";
        } else {
          element.removeAttribute("style");
          element.innerHTML = "First Name";
        }
      } else if (key === "email") {
        if (!value) {
          validate = false;
          element.style.color = "red";
          element.innerHTML = "Email Address : Empty";
        } else if (
          !value.indexOf("@") ||
          !value.indexOf(".") ||
          value.split("@").length > 2 ||
          value.split(".").length > 2
        ) {
          validate = false;
          element.style.color = "red";
          element.innerHTML = "Email Address : Invalid Email Form";
        } else {
          element.removeAttribute("style");
          element.innerHTML = "Email Address";
        }
      } else {
        if (!value) {
          validate = false;
          element.style.color = "red";
          element.innerHTML = "Password : Empty";
        } else if (value.length < 5) {
          validate = false;
          element.style.color = "red";
          element.innerHTML = "Password : Too Short";
        } else {
          element.removeAttribute("style");
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
