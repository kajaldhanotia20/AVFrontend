import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function AddVehicle() {

    return (
        <div className="text-center m-5-auto">
            <h2>Add a Vehicle</h2>
            <form action="/home">

                <p>
                    <label>Vehicle ID</label><br/>
                    <input type="number" name="vehicle_id" required />
                </p>

                <p>
                    <label>Vehicle Brand</label><br/>
                    <input type="text" name="vehicle_class" required />
                </p>
            
                <p>
                    <label>Vehicle Class</label><br/>
                    
                    <select name="vehicle_class" id="selectList">
                    <option value="option 1">Sedan</option>
                     <option value="option 2">SUV</option>
                    <option value="option 2">XL</option>
                </select>
                </p>
                
                <p>
                    <label>Vehicle License</label><br/>
                    <input type="text" name="vehicle_license" required />
                </p>

               
                
                <p>
                    <button id="sub_btn" type="submit">Add</button>
                </p>

            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
    )

}