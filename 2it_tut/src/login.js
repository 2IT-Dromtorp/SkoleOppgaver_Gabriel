import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import lake from "./LackImage.png";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'gabriel' && password === '123') {
            navigate('/home');
        } else {
            console.log('Incorrect username or password');
        }
    };

    const backgroundImageStyle = {
        backgroundImage: `url(${lake})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
    };

    return (
        <>
            <div style={backgroundImageStyle} id="Background">
                <div id="LoginBox">
                    <h2>Logg inn</h2>
                    <p>Brukernavn</p>
                    <label htmlFor="username"></label>
                    <input
                        type="text"
                        placeholder='Username: gabriel'
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update username state
                    />
                    
                    <p>Passord</p>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        placeholder='password:123'
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                    /><br/>
                    <button onClick={handleLogin} id="buttonLogin">Logg inn</button>
                </div>
            </div>
        </>
    );
}
