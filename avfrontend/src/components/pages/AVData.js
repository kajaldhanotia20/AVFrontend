import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Card from "react-bootstrap/Card";
import { CardGroup, Row, Col} from 'react-bootstrap';


const AVData = () => (
<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 6 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>AV Property</Card.Title>
          <Card.Text>
           This is some information about the AV imported from CARLA such as AV Location, 
           Sensor Information and AV zcurrent Status.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>



)

export default AVData