import { Link } from 'react-router-dom'
import React from 'react'
import Card from "react-bootstrap/Card";
import { Button , CardGroup } from 'semantic-ui-react';


export default function HomePage() {

return(
<CardGroup>
<Card className="text-center">
  
  <Card.Body>
    <Card.Title>AV User Pages</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Link to="/ScheduleRide"><Button className="primary-button">Schedule a Ride</Button></Link>
    <Link to="/ViewRideHistory"><Button className="primary-button">View Ride History</Button></Link>
    <Link to="/BillingDashboard"><Button className="primary-button">Billing Dashboard</Button></Link>
    <Link to="/SensoInfo"><Button className="primary-button">AV Sensor Information</Button></Link>
  </Card.Body>
  <Card.Footer className="text-muted">Visible only to AV Users</Card.Footer>
</Card>


<Card className="text-center">
  
  <Card.Body>
    <Card.Title>AV Owner Pages</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Link to="/AddVehicle"><Button className="primary-button">Add A Vehicle</Button></Link>
    <Link to="/DeleteVehicle"><Button className="primary-button">Delete A Vehicle</Button></Link>
    <Link to="/AVData"><Button className="primary-button">See AV Status</Button></Link>
    
  </Card.Body>
  <Card.Footer className="text-muted">Visible only to AV Owners</Card.Footer>
</Card>

<Card className="text-center">
  
  <Card.Body>
    <Card.Title>AV Admin Pages</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Link to="/AVData"><Button className="primary-button">See User Data</Button></Link>
    <Link to="/UserData"><Button className="primary-button">See AV Data</Button></Link>
    
  </Card.Body>
  <Card.Footer className="text-muted">Visible only to AV Admins</Card.Footer>
</Card>


</CardGroup>
)
}
