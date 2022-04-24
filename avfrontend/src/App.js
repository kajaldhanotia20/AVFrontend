import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import AdminDashboard from './components/pages/AdminDashboard'
import UserData  from './components/pages/UserData'
import AVData  from './components/pages/AVData'
import ScheduleRide  from './components/pages/ScheduleRide'
import ViewRideHistory from './components/pages/ViewRideHistory'
import AddVehicle from './components/pages/AddVehicle'
import BillingDashboard from './components/pages/BillingDashboard'
import SensorInfo from './components/pages/SensorInfo'
import DeleteVehicle from './components/pages/DeleteVehicle'

import './App.css'


export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/adminDashboard" component={ AdminDashboard } />
                    <Route path="/userData" component={ UserData }/>
                    <Route path="/AVData" component={ AVData }/>
                    <Route path="/ScheduleRide" component={ ScheduleRide }/>
                    <Route path="/ViewRideHistory" component={ ViewRideHistory } />
                    <Route path="/AddVehicle" component={ AddVehicle } />
                    <Route path="/BillingDashboard" component={ BillingDashboard }/>
                    <Route path="/SensorInfo" component={ SensorInfo }/>
                    <Route path="/DeleteVehicle" component={ DeleteVehicle }/>
                   
                </Switch>
               
            </div>
        </Router>
    )
}

