import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Sign In</h1>
        <form className="form-content">
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
          <button className="form-submit-btn">Signin</button>
          <Link to="/signup" className="form-account-already-exist-link">
            <span className="form-account-already-exist-text">
              New Customer? Register
            </span>
          </Link>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
