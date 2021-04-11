import React from 'react';
import './Logo.css';
import {Link} from 'react-router-dom';
export function Logo() {
    return (
        <div>
            <div className="logo"><Link to="/home">[Join.US]</Link></div>
        </div>
    )
}
