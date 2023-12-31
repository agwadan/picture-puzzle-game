import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

useEffect(() => {
  alert(`The data for the login is temporarily stored in a JSON file. \n Use these details to login; \n Username: johndoe \nPassword: password123`);
}, [])

  
  const handleLogin = async () => {
    // Fetch the JSON file
    const response = await fetch('users.json');
    console.log(response);
    const data = await response.json();

    // Find the user
    const user = data.users.find(user => user.username === username && user.password === password);

    if (user) {
      alert('Logged in successfully');
      navigate('/board');
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
