import { Link } from 'react-router-dom'
import React from 'react'
import { useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";



const AdminDashboard = () => {
    const {user} = useAuth0();
    
    
    return (
        
        <div className="text-center">

        </div>

        )

}
export default AdminDashboard