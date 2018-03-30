import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'

const Welcome = () => {
    return (
        <div>
            <nav>
                <Link to="/catalogue">Start Shopping</Link>
            </nav>
                <h1>Welcome to Amaz.io</h1>
            <div>
            </div>
        </div>
    )
}

export default Welcome;