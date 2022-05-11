import React from 'react'
import Table from 'react-bootstrap/Table'

const BillingDashboard = () => (
    <div className='SensorData'>
      <h1 className='subheading'>Billing Dashboard</h1><br></br>
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Billing Amount</th>
        <th>Payment Method</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>$40</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>$24</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>

      </tr>
    </tbody>
  </Table>
  </div>
)

export default BillingDashboard