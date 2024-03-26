import React from "react";
import "../App.css";

import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <>
        <div className="navbar">
                <div className="logo">
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">Explore</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signUp">SignUp</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;