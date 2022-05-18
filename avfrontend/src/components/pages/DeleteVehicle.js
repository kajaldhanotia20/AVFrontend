import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../../App.css";
import Axios from "axios";

export default class DeleteVehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      vehicle_id: 0,
    };
  }

  componentDidMount(props) {
    let vehicledetails = "http://54.67.87.208:8001/vehicle/details";
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
    console.log(this.state.vehicle_id);
    let data = {
      vehicle_id: this.state.vehicle_id,
    };
    console.log(data);
    let url = "http://54.67.87.208:8001/vehicle/delete";
    Axios.post(url, data).then((response) => {
      console.log(response.data.message);
      if (response.status === 200) {
        console.log(response);
        // window.location.href = "/homeOwner"
      } else console.log("405", response);
    });
  };

  handleVechicleDeleted = (e) => {
    console.log(e.target.value);
    this.setState({ vehicle_id: e.target.value });
  };

  render() {
    return (
      <div className="text-center m-5-auto" style={HeaderStyle}>
        <h2 className="main-para">Delete Vehicle</h2>
        <form>
          <br />
          <br />
          <br />
          <label className="labelSlot">Vehicle ID</label>
          <select name="vehicle" onChange={this.handleVechicleDeleted}>
            {this.state.vehicles.map((i) => {
              return (
                <option value={i.vehicle_id} key={i.vehicle_id}>
                  {i.vehicle_id}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          <label>
            Reason
            <input type="text" name="name" onChange={this.handleEndLocation} />
          </label>

          <br />
          <br />
          <br />
          <br />
          <div>
            <div>
              <a href="/ViewRideHistory">
                <Button id="sub_btn" size="lg" onClick={this.handleOnSubmit}>
                  Delete
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
