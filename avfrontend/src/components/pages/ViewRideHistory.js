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
      <div className="Stats">
        <div className="Table">
          <Table data={this.state.stats} />
        </div>
        <div>
          <Link to="/homeUser">
            <Button className="primary-button">Back</Button>
          </Link>
        </div>
      </div>
    );
  }
}
