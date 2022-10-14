import axios from "axios";
import React, { useState } from "react";
import "./AuthStyle.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function handleEmail(event) {
    setemail(event.target.value);
  }
  function handlePassword(event) {
    setpassword(event.target.value);
  }
  function loginuser(event) {
    event.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };
    console.log(credentials);
    axios
      .post("/api/restaurant/login", credentials)
      .then((res) => {
        console.log("login exitoso");
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <form>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          value={email}
          onChange={handleEmail}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          value={password}
          onChange={handlePassword}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="buttons d-grid">
        <button onClick={loginuser} type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>

      <p className="forgot-password text-center">
        Forgot <a href="#">password?</a>
      </p>

      <p className="forgot-password text-center">
        Dont have an account? <a href="/sign-up">Sign Up</a>
      </p>
    </form>
  );
}
export default Login;
