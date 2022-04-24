import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../App.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    alert(`welcome ${username}`);
    window.location.href = "/home";
  }
  return (
    <div className="text-center m-5-auto">
      <h2>Sign in</h2>
      <form onSubmit={onSubmit}>
        <p>
          <label>Username or email address</label>
          <br />
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}