import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import Axios from "axios";
import Table from "../Table";
import "./ViewRideHistory.css";
export default class stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: [],
    };
  }
  componentDidMount(props) {
  let user_name = localStorage.getItem("username");
    console.log("view ride",user_name);
    let data = {
      user_name,
    };
    console.log(data);
    Axios.post("http://localhost:8001/ridehistory", data).then((response) => {
      console.log(response);
      this.setState({
        stats: response.data,
      });
    });
  }

  render() {
    return (
      <div className="text-center m-5-auto" style={HeaderStyle}>
        <h1 className="subheading">Your Rides</h1>
        <div className="Stats">
          <div className="Table">
            <Table data={this.state.stats} />
            <Button size ="s" className="primary-button">Stop Current Trip</Button>
          </div>
          <div>
            <Link to="/homeUser">
              <Button className="primary-button">Back</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const HeaderStyle = {
  width: "100%",
  height: "140vh",
  background: `url(https://cdn3.vectorstock.com/i/1000x1000/10/47/taxi-car-city-background-graphic-vector-11631047.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
