import React from "react";
import "./SignupScreen.css";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Sign Up</h1>
        <form className="form-content">
          <label className="form-label">Name</label>
          <input
            className="form-input-field"
            type="text"
            placeholder="Enter name"
          />
          <label className="form-label">Email Address</label>
          <input
            className="form-input-field"
            type="text"
            placeholder="Enter email address"
          />
          <label className="form-label">Password</label>
          <input
            className="form-input-field"
            type="password"
            placeholder="Enter password"
          />
          <label className="form-label">Confirm password</label>
          <input
            className="form-input-field"
            type="password"
            placeholder="Confirm name"
          />
          <button className="form-submit-btn">Register</button>
          <Link to="/signin" className="form-account-already-exist-link">
            <span className="form-account-already-exist-text">
              Have an account already? Login
            </span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignupScreen;
