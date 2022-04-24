import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.webp'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            
            <h1 className="main-title text-center">AV Cloud</h1>
            <p className="main-para text-center">One-stop AV renting platform</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button size="sm" className="primary-button"><span>log in</span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}