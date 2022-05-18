import io from "socket.io-client";
import axios from "axios";
import Table from "react-bootstrap/Table";
import React, { Component, Item } from "react";

import "../../App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      sensorRecords: [],
      time: "",
      passengers: 0,
      precipitation: 0,
      fog: 0,
      wetness: 0,
      license: "",
      condition: "",
      speed: "",
      location: "",
      heading: "",
      throttle: "",
      tripDistance: 0.0,
      tripCost: 0.0,
    };
  }

  componentDidMount = async () => {
    //socket.io connection
    const socket = io("http://54.67.87.208:3300", {
      transports: ["websocket", "polling"],
    });

    socket.on("newSensorRecord", (sensorRecord) => {
      this.setState({
        sensorRecords: [...this.state.sensorRecords, sensorRecord],
        time: String(new Date(sensorRecord.world_details.time * 1000)),
        passengers: sensorRecord.world_details.vehicles,
        precipitation: sensorRecord.weather.precipitation,
        fog: sensorRecord.weather.fog,
        wetness: sensorRecord.weather.wetness,
        license: sensorRecord.vehicle_details.vehicle_license,
        condition: sensorRecord.vehicle_details.condition,
        speed: sensorRecord.vehicle_details.speed,
        location: sensorRecord.vehicle_details.location,
        heading: sensorRecord.vehicle_details.heading,
        throttle: sensorRecord.vehicle_details.throttle,
        tripDistance: sensorRecord.trip_details.trip_distance,
        tripCost: sensorRecord.trip_details.trip_cost,
      });
      console.log(typeof this.state.time);
      console.log(sensorRecord);
    });
    await this.fetchSensorRecords();
  };

  fetchSensorRecords = async () => {
    const response = await axios.get("http://54.67.87.208:3300");
    try {
      if (response.data.sucess) {
        console.log(response.data.message);
        this.setState({
          sensorRecords: response.data.message,
        });
      } else {
        console.log("Error fetching sensor data, ", response.data.message);
      }
    } catch (err) {
      console.log("Error fetching sensor records: ", err);
    }
  };

  render() {
    return (
      <div className="SensorData">
        <h1 className="main-para">CARLA Real-time Vehicle Sensor Data</h1>
        <br></br>
        <br></br>
        <div className="World Details">
          <h3 className="subheading">World Details</h3>
          <Table striped bordered hover title="World Details">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Passengers</th>
                <th>Precipitation</th>
                <th>Fog</th>
                <th>Wetness</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{this.state.time}</th>
                <th>{this.state.passengers}</th>
                <th>{this.state.precipitation}</th>
                <th>{this.state.fog}</th>
                <th>{this.state.wetness}</th>
              </tr>
            </tbody>
          </Table>
        </div>
        <br></br>
        <br></br>
        <div className="m-5-auto">
          <h3 className="subheading">Vehicle Details</h3>
          <Table striped bordered hover title="Vehicle Details">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>License Plate</th>
                <th>Condition</th>
                <th>Speed</th>
                <th>Location</th>
                <th>Heading Towards</th>
                <th>Throttle level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{this.state.time}</th>
                <th>{this.state.license}</th>
                <th>{this.state.condition}</th>
                <th>{this.state.speed}</th>
                <th>{this.state.location}</th>
                <th>{this.state.heading}</th>
                <th>{this.state.throttle}</th>
              </tr>
            </tbody>
          </Table>
        </div>
        <br></br>
        <br></br>
        <div>
          <h3 className="subheading">Trip Details</h3>
          <Table striped bordered hover title="Trip Details">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Trip Distance</th>
                <th>Trip Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{this.state.time}</th>
                <th>{this.state.tripDistance}</th>
                <th>$ {this.state.tripCost}</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
