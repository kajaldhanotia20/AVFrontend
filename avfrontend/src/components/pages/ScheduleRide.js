import React, { Component } from "react";
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
      reservation_id: "",
    };
  }

  componentDidMount(props) {
    let vehicledetails = "http://13.52.182.171:8001/vehicle/details";
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
    let user = localStorage.getItem("username");
    console.log("onSubmit");
    console.log(this.state.start_location);
    console.log(this.state.end_location);
    console.log(this.state.payment_type);
    console.log(this.state.vehicle_selected);
    console.log("User Loggedin", user);

    let data = {
      start_location: this.state.start_location,
      end_location: this.state.end_location,
      vehicle_brand: this.state.vehicle_selected,
      payment_type: this.state.payment_type,
      user_name: user,
      tripID: this.state.reservation_id,
    };
    let url2 = "http://13.52.182.171:8001/reservation";
    console.log("current data 1", data);
    Axios.post(url2, data).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        this.setState({ reservation_id: response.data.data });
        console.log("DB SUCCESS");
        console.log(this.state.reservation_id);
        let data2 = {
          start_location: this.state.start_location,
          end_location: this.state.end_location,
          vehicle_brand: this.state.vehicle_selected,
          payment_type: this.state.payment_type,
          user_name: user,
          tripID: this.state.reservation_id,
        };
        let url = "http://74.82.30.176:5401/start_ride";
        console.log("current data 2", data2);
        Axios.get(url, { params: data2 }).then((response) => {
          if (response.status === 200) {
            console.log("KIRAN SUCCESS");
            console.log(response);
            window.location.href = "/ViewRideHistory";
          } else console.log("405", response);
        });
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
    return (
      <div className="text-center m-5-auto" style={HeaderStyle}>
        <h2 className="main-para">Schedule a Ride</h2>
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
