import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <section>
            
       <div className="text-center">
            <h1>Welcome to AV Cloud Rental Platform</h1>
</div>


<div className="text-center">
    <h2>AV User Pages</h2>

            <Link to="/ScheduleRide">
                <button className="primary-button">Schedule A Ride</button>
            </Link>

            <Link to="/ViewRideHistory">
                <button className="primary-button">View Ride History</button>
            </Link>

            <Link to="/ViewRideHistory">
                <button className="primary-button">Billing Dashboard</button>
            </Link>

            <Link to="/SensorInfo">
                <button className="primary-button">AV Sensor Information</button>
            </Link>

            </div>

<div className="text-center">
<h2>AV Owner Pages</h2>

            <Link to="/AddVehicle">
                <button className="primary-button">Add A Vehicle</button>
            </Link>

            <Link to="/DeleteVehicle">
                <button className="primary-button">Delete A Vehicle</button>
            </Link>

            <Link to="/AVData">
                <button className="primary-button">See AV Data</button>
            </Link>

            </div>

<div className="text-center">
        <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        </section>
    )
}
