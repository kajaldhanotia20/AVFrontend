import { Link } from "react-router-dom";
import React from "react";
import Card from "react-bootstrap/Card";
import { Button, CardGroup } from "semantic-ui-react";
import "../../App.css";

export default function HomePage() {
  return (
    <CardGroup>
      <img
        src="https://site.utah.gov/dps-highwaysafe/wp-content/uploads/sites/22/2017/02/Autonomous-Twitter-Headersmaller.jpg"
        className="coverphoto"
      />

      <Card className="text-center">
        <Card.Body>
          <Card.Title>Welcome AV User</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Link to="/ScheduleRide">
            <Button className="primary-button">Schedule a Ride</Button>
          </Link>
          <Link to="/ViewRideHistory">
            <Button className="primary-button">
              View Ride History/Billing
            </Button>
          </Link>
          <Link to="/Wallet">
            <Button className="primary-button">My Wallet</Button>
          </Link>
          <Link to="/">
            <Button className="primary-button">Logout</Button>
          </Link>
        </Card.Body>
        <br />
        <br />
        <br />
        <br />
        <Card.Footer className="text-muted">Services to AV Users</Card.Footer>
      </Card>
    </CardGroup>
  );
}
