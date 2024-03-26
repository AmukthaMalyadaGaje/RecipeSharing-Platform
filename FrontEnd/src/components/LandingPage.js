import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
//style={{ backgroundImage: `url(${bgImage})` }}
function LandingPage() {
    return (
        <div className="landing-page" >
            <Navbar />
            <div className="search-bar">
                <input type="text" placeholder="Search recipes..." />
                <button>Search</button>
            </div>
        </div>
    );
}

export default LandingPage;
