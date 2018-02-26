import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <nav>
                <Link to="/catalogue">View Catalogue</Link>
            </nav>
            <div>
                <h1>Welcome to Amaz.io</h1>
            </div>
        </div>
    )
}

export default Welcome;