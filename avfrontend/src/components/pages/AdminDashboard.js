import { Link } from 'react-router-dom'
import React from 'react'



export default function AdminDashboard() {

    return (
        <div className="text-center">
            <h1 className="main-para">Admin Dashboard</h1>
            <Link to="/userData">
                <button className="primary-button">See User Data</button>
                
            </Link>


            <Link to="/AVData">
                <button className="primary-button">See AV Data</button>
            </Link>

        </div>


)


}