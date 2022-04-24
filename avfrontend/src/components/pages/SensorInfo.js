import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from "react-bootstrap/Card";
import "../../App.css";


export default function SensorInfo() {
return (
 <CardGroup>
    <Card className='card' > 
      <Card.Img variant="top" src="https://miro.medium.com/max/770/1*eCnoqNGCGJmNh2FLz6kZpA.jpeg" className='photo' />
      <Card.Body>
        <Card.Title>AV Location</Card.Title>
        <Card.Text>
          This data will be fetched from Mongo DB. The AV location will be extracted from the CARLA simulator 
          and then displayed here for the admin to be track and control each AV.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    
    <Card className='card'>
      <Card.Img variant="top" src="https://www.eetasia.com/wp-content/uploads/sites/2/2022/03/Autonomous_Vehicles-cover.jpg?w=600&h=400&crop=1" className='photo'/>
      <Card.Body>
        <Card.Title>AV Status</Card.Title>
        <Card.Text>
        This data will be fetched from Mongo DB. The AV connectivity status will be extracted from the CARLA simulator 
          and then displayed here for the admin to be track and control each AV.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>

    <Card className='card'> 
      <Card.Img variant="top" src="https://procarreviews.com/wp-content/uploads/Best-Car-Compass.jpg" className='photo' />
      <Card.Body>
        <Card.Title>Heading</Card.Title>
        <Card.Text>
        This data will be fetched from Mongo DB. The AV direction will be extracted from the CARLA simulator 
        and then displayed here for the admin to be track and control each AV.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>
 
   
)
}
