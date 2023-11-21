import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function OrderPage() {
    const location = useLocation()
    const {name} = location.state
    
    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/')
    }
    return (
        <div>
        <h1>Bonjour {name}</h1>
        <button onClick={handleLogOut}>Déconnexion</button>
        </div>
    )
}

export default OrderPage
