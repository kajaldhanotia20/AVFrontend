import { Link } from "react-router-dom";
import React from "react";
import Card from "react-bootstrap/Card";
import { Button, CardGroup } from "semantic-ui-react";
import "../../App.css";

export default function HomePageAVOwner() {
  return (
    <CardGroup>
      <img
        src="https://site.utah.gov/dps-highwaysafe/wp-content/uploads/sites/22/2017/02/Autonomous-Twitter-Headersmaller.jpg"
        className="coverphoto"
      />
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Welcome AV Owner</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Link to="/AddVehicle">
            <Button className="primary-button">Add A Vehicle</Button>
          </Link>
          <Link to="/DeleteVehicle">
            <Button className="primary-button">Delete A Vehicle</Button>
          </Link>
          <Link to="/AVData">
            <Button className="primary-button">See AV Status</Button>
          </Link>
          <Link to="/">
            <Button className="primary-button">Logout</Button>
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
