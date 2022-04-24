import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your account</h5>
            <form action="/home">

                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="first_name" required />
                </p>

                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="last_name" required />
                </p>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>DOB</label><br/>
                    <input type="date" name="dob" required />
                </p>
                <p>
                    <label>Phone</label><br/>
                    <input type="number" name="phone" required />
                </p>
                <p>
                    <label>Address</label><br/>
                    <input type="text" name="address" required />
                </p>
                <p>
                    <label>User Type</label><br/>
                    
                    <select name="selectList" id="selectList">
                    <option value="option 1">AV User</option>
                     <option value="option 2">AV Owner</option>
                </select>
                </p>

                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
    )

}
