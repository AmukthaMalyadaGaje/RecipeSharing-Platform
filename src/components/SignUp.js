import React, { useState } from 'react';
import '../App.css'; // Import CSS file for styling
import Navbar from './Navbar';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Perform signup logic here (e.g., call an API to create a new user)
        // For simplicity, let's just display the entered information
        alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
    };

    return (
        <>
        <Navbar/>
        <div className="signup-container">
            <div className="signup-card">
                <h2>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <br />
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
        </>
    );
}

export default SignUp;
