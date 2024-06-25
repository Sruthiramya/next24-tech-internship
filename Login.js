// frontend/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const { data } = await axios.post('/api/users/login', { email, password });
            localStorage.setItem('token', data.token);
            alert('Login successful!');
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Failed to login.');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
