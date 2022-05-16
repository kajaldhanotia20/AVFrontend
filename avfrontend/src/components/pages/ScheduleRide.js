import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";
import "../../App.css";
import Axios from "axios";

export default class ScheduleRide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_location: "",
      end_location: "",
      payment_type: "",
      vehicles: [],
      vehicle_selected: "",
      
    };
  }

  componentDidMount(props) {
    let vehicledetails = "http://localhost:8001/vehicle/details";
    Axios.get(vehicledetails).then((res) => {
      console.log(res.data);
      this.setState({
        vehicles: res.data,
      });
      console.log(this.state.vehicles);
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    console.log(this.state.start_location);
    console.log(this.state.end_location);
    console.log(this.state.payment_type);
    console.log(this.state.user_name);
    console.log(this.state.vehicle_selected);
    let data = {
      startLocation: this.state.start_location,
      endLocation: this.state.end_location,
      vehicle: this.state.vehicle_selected,
      payment: this.state.payment_type,
    };
    let url = "http://10.0.0.14:5500/start_ride";

    Axios.get(url, { params: data}).then((response) => {
      console.log(response.data.message);
      if (response.status === 200) {
        console.log(response);
      } else console.log("405", response);
    });
  };
  handleStartLocation = (e) => {
    console.log(e.target.value);
    this.setState({ start_location: e.target.value });
  };
  handleEndLocation = (e) => {
    console.log(e.target.value);
    this.setState({ end_location: e.target.value });
  };

  handlePayment = (e) => {
    console.log(e.target.value);
    this.setState({ payment_type: e.target.value });
  };
  handleVechicleSelected = (e) => {
    console.log(e.target.value);
    this.setState({ vehicle_selected: e.target.value });
  };

  render() {
    let redirectVar = null;

    if (this.state.successEmail) {
      redirectVar = (
        <Redirect
          to={{
            pathname: "/slotBookingSuccess",
            state: {
              slotId: this.state.slotId,
              slotDate: this.state.appointmentDate,
              slotTime: this.state.appointmentTime,
            },
          }}
        />
      );
    }

    return (
      <div className="text-center m-5-auto" style={HeaderStyle}>
        <h2 className="main-para">Schedule a Ride</h2>
        {redirectVar}
        <form>
          <label>
            Start Location
            <input
              type="text"
              name="name"
              onChange={this.handleStartLocation}
            />
          </label>
          <br />
          <br />
          <br />
          <label>
            End Location
            <input type="text" name="name" onChange={this.handleEndLocation} />
          </label>
          <br />
          <br />
          <br />
          <label className="labelSlot">Vehicle Brand</label>
          <select name="vehicle" onChange={this.handleVechicleSelected}>
            {this.state.vehicles.map((i) => {
              return (
                <option value={i.vehicle_brand} key={i.vehicle_brand}>
                  {i.vehicle_brand}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          <label className="labelSlot">Payment Type</label>
          <select name="payment" onChange={this.handlePayment}>
            <option value="CC" key="CC">
              Credit Card
            </option>
            <option value="DC" key="DC">
              Debit Card
            </option>
          </select>
          <br />
          <br />
          <div>
            <div>
              <a href="/ViewRideHistory">
                <Button id="sub_btn" size="lg" onClick={this.handleOnSubmit}>
                  Book Ride
                </Button>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(https://i.pinimg.com/originals/4a/d7/13/4ad713b97bd81020827b7e32c40eb833.gif)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
