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
      username: "abhim",
    };
  }
  componentDidMount(props) {
    let user_name = this.state.username;
    console.log(user_name);
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
      <div className="m-5 auto"><h1 className="subheading">Ride History</h1>
      <div style={HeaderStyle} className="Stats">
        <div className="Table">
          <Table data={this.state.stats} />
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
  //backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
