import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ScheduleRide() {

    return (
        <div className="text-center m-5-auto">
            <h2>Schedule a Ride</h2>
            <form action="/home">

                <p>
                    <label>Start Location</label><br/>
                    <input type="location" name="start_location" required />
                </p>

                <p>
                    <label>Destination</label><br/>
                    <input type="location" name="Destination" required />
                </p>
            
                <p>
                    <label>Vehicle Type</label><br/>
                    
                    <select name="selectList" id="selectList">
                    <option value="option 1">Sedan</option>
                     <option value="option 2">SUV</option>
                    <option value="option 2">XL</option>
                </select>
                </p>
                

                <p>
                    <label>Number of Passangers</label><br/>
                    <input type="number" name="passanger" required />
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Schedule</button>
                </p>

            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
    )

}
