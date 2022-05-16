import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";
import "../../App.css";

export default class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      money: 0,
      payment_type: "",
      current: 0,
    };
  }

  componentDidMount(props) {
let c = JSON.parse(localStorage.getItem("money"));
console.log("from ls", c);
this.setState({ current: c });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    console.log(this.state.money);
    console.log(this.state.payment_type);
    let updated = parseInt(this.state.money) + parseInt(this.state.current);
    localStorage.setItem("money", JSON.stringify(updated));
    let c = JSON.parse(localStorage.getItem("money"));
    console.log("from ls", c);
    this.setState({ current: c });
    let data = {
      moneyAdded: this.state.money,
      payment: this.state.payment_type,
    };
    window.location.href = "/homeUser";
  };
  handleMoney = (e) => {
    console.log(e.target.value);
    this.setState({ money: e.target.value });
  };

  handlePayment = (e) => {
    console.log(e.target.value);
    this.setState({ payment_type: e.target.value });
  };

  render() {
    return (
      <div className="text-center m-5-auto" style={HeaderStyle}>
        <h2 className="main-para">Manage your wallet</h2>
        <form>
          <h5>Current Balance : {this.state.current}</h5>
          <label>
            Amount $
            <input type="text" name="name" onChange={this.handleMoney} />
          </label>
          <br />
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
              <Button id="sub_btn" size="lg" onClick={this.handleOnSubmit}>
                Add
              </Button>
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
