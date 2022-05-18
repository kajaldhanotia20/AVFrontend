import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";

import "../../App.css";

export default function LandingPage() {
  //  const {loginWithRedirect} = useAuth0();
  //  const [admin, setAdmin] = useState(0);
  //   function handleClick() {

  //     loginWithRedirect()
  //   }

  return (
    <header style={HeaderStyle}>
      <button className="primary-button" onClick={handleClick}>
        Admin Dashboard
      </button>
      <h1 className="main-title text-center">AV Cloud</h1>
      <p className="subheading">One-stop AV renting platform</p>
      <div className="buttons text-center">
        <Link to="/login">
          <button size="sm" className="primary-button">
            <span>log in</span>
          </button>
        </Link>
        <Link to="/register">
          <button className="primary-button" id="reg_btn">
            <span>register </span>
          </button>
        </Link>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(https://thenextavenue.com/wp-content/uploads/2020/10/01-mercedes-benz-innovation-f015-luxury-in-motion-autonomous-driving-3400x1440-1.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
