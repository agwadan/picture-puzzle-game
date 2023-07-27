import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Fetch the JSON file
    const response = await fetch('users.json');
    const data = await response.json();

    // Find the user
    const user = data.users.find(user => user.username === username && user.password === password);

    if (user) {
      alert('Logged in successfully');
      // Here you might want to switch the view, e.g., by setting some state in a parent component
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-form">
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  );
};

export default Login;
