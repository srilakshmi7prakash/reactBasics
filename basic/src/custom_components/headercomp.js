import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/click-counter">Count</Link></li>
            </ul>
        </div>

    )
}

export { Header };