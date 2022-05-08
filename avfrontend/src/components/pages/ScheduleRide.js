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
      user_name: JSON.parse(localStorage.getItem("login_status")).emailId,
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

  //   handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(this.state.appointmentDate);
  //     console.log(this.state.appointmentTime);
  //     console.log(this.state.Email);
  //     let data = {
  //       VC_name: this.state.vaccineCenterControl,
  //       V_name: this.state.vaccineNameControl,
  //       FDate: this.state.appointmentDate,
  //       Ftime: this.state.appointmentTime,
  //       Email: this.state.Email,
  //       sponsorName: this.state.sponsorControl,
  //     };
  //     Axios.post("http://localhost:5000/slotbookingfetch/slotbook", data).then(
  //       (response) => {
  //         console.log(response.data.message);
  //         if (response.status === 200) {
  //           var slotId = new String(response.data.id);
  //           this.setState({
  //             message: response.data.message,
  //             hideSuccess: false,
  //             successEmail: JSON.parse(localStorage.getItem("login_status"))
  //               .emailId,
  //             slotId: slotId.toString(),
  //           });
  //           Axios.post(
  //             "http://localhost:5000/slotbookingfetch/updateStockOnBooking",
  //             data
  //           ).then((response) => {
  //             console.log(response.data.message);
  //             if (response.status === 200) {
  //               alert("Stock reduced");
  //             }
  //           });
  //         }
  //       }
  //     );
  //   };
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
      <div className="text-center m-5-auto">
        {redirectVar}
        <form>
          <label>
            Start Location
            <input type="text" name="name" />
          </label>
          <br />
          <br />
          <br />
          <label>
            End Location
            <input type="text" name="name" />
          </label>
          <br />
          <br />
          <br />
          <label class="labelSlot">Vehicle Brand</label>
          <select name="vehicle">
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
          <label class="labelSlot">Payment Type</label>
          <select name="payment">
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
            <div className="buttonContainer">
              <a href="/ViewRideHistory">
                <Button
                  size="lg"
                  variant="outline-primary"
                  //   onClick={this.handleOnSubmit}
                >
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
