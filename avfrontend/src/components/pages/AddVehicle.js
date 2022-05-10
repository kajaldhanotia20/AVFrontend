import React , {useState} from 'react'
import { Link } from 'react-router-dom'


import '../../App.css'

export default function AddVehicle() {

    const [name, setName] = useState("");
     function onSubmit(e) {
       e.preventDefault();
       alert(`Vehicle Added`);
       window.location.href = "/AddVehicle";
     }

    return (

        <div className="text-center m-5-auto" style={HeaderStyle}>
        <h2 className="main-para">Add a Vehicle</h2>
        <h5>List your own vehicle</h5>
        <form onSubmit={onSubmit}>
        <p>
                    <label>Vehicle ID</label><br/>
                    <input type="number" name="vehicle_id" required 
               
              onChange={(e) => setName(e.target.value)}/>
          
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
                    <label>Vehicle Class</label><br/>
                    
                    <select name="vehicle_class" id="selectList">
                    <option value="option 1">Tesla</option>
                     <option value="option 2">Toyota</option>
                    <option value="option 2">Hyundai</option>
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

const HeaderStyle={

    width: "100%",
    height: "100vh",
    background: `url(https://cdn2.vectorstock.com/i/1000x1000/87/01/flat-cityscape-modern-city-skyline-daytime-vector-26978701.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  
  }