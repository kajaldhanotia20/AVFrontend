import { Link } from 'react-router-dom'
import React from 'react'
import Card from "react-bootstrap/Card";
import { Button , CardGroup } from 'semantic-ui-react';
import '../../App.css'

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
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to="/ScheduleRide">
          <Button className="primary-button">Schedule a Ride</Button>
        </Link>
        <Link to="/ViewRideHistory">
          <Button className="primary-button">View Ride History</Button>
        </Link>
        <Link to="/BillingDashboard">
          <Button className="primary-button">Billing Dashboard</Button>
        </Link>
        <Link to="/SensorInfo">
          <Button className="primary-button">AV Sensor Information</Button>
        </Link>
        <Link to="/">
          <Button className="primary-button">Logout</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">Visible only to AV Users</Card.Footer>
    </Card>
  </CardGroup>
);
}


