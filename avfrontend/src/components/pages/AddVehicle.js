import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "../../App.css";

export default function AddVehicle() {
  const [vehicle_class, setVclass] = useState("");
  const [vehicle_model, setVmodel] = useState("");
  const [vehicle_brand, setVbrand] = useState("");
  const [vehicle_license, setVlicense] = useState("");
  function onSubmit(e) {
    e.preventDefault();

    window.location.href = "/AddVehicle";
  }

  function onSubmit(e) {
    e.preventDefault();
    let data = {
      vehicle_class,
      vehicle_model,
      vehicle_brand,
      vehicle_license,
    };
    Axios.post("http://13.52.182.171:8001/vehicle/add", data)
      .then((response) => {
        console.log(response);
        console.log(response.data.message);
        if (response.statusText == "OK") {
          alert(`Vehicle Added, Check your Database`);
          window.location.href = "/homeOwner";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="text-center m-5-auto" style={HeaderStyle}>
      <h2 className="main-para">Add a Vehicle</h2>
      <h5>List your own vehicle</h5>
      <form onSubmit={onSubmit}>
        <p>
          <label>Vehicle Brand</label>
          <br />
          <input
            type="text"
            name="vehicle_brand"
            onChange={(e) => setVbrand(e.target.value)}
            required
          />
        </p>

        <p>
          <label>Vehicle Model</label>
          <br />
          <input
            type="text"
            name="vehicle_model"
            onChange={(e) => setVmodel(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Vehicle Class</label>
          <br />
          <input
            type="text"
            name="vehicle_model"
            onChange={(e) => setVclass(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Vehicle License</label>
          <br />
          <input
            type="text"
            name="vehicle_model"
            onChange={(e) => setVlicense(e.target.value)}
            required
          />
        </p>

        <p>
          <button id="sub_btn" type="submit">
            Add
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </footer>
    </div>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(https://cdn2.vectorstock.com/i/1000x1000/87/01/flat-cityscape-modern-city-skyline-daytime-vector-26978701.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
