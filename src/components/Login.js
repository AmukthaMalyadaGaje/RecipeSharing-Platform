import React, { useState } from 'react';
import '../App.css'; // Import CSS file for styling
import Navbar from './Navbar';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let email = 'weefwej@gmail.com';

    const handleLogin = async() => {
        // Perform login logic here (e.g., call an API to verify credentials)
        // For simplicity, let's just check if the username and password are not empty
        // if (username.trim() !== '' && password.trim() !== '') {
        //     setIsLoggedIn(true);
        //     alert('Login successful!');
        // } else {
        //     alert('Please enter username and password.');
        // }
        try{
            let res = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name:username, password:password,email:email })
            }
            )
            console.log(res);

        }catch(e){
            console.log(e);

        }



    };

    return (
        <>
        <Navbar/>
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button onClick={handleLogin}>Login</button>
                {isLoggedIn && <p>Welcome, {username}!</p>}
            </div>
        </div>
        </>
    );
}

export default Login;
