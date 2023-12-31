// Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  const handleSignup = async () => {
    // You would usually make a request to your backend to create the user here
    // Since we're using a static JSON file, we'll just simulate a successful signup

    alert('Signed up successfully. You can now log in.');
    navigate('/');
  };

  return (
    <div className="signup-form">
      <label>
        Name:
        <input type="text" required value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Gender:
        <input type="text" required value={gender} onChange={e => setGender(e.target.value)} />
      </label>
      <label>
        Birthday:
        <input type="date" required value={birthday} onChange={e => setBirthday(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Address:
        <input type="text" required value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="tel" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" required value={location} onChange={e => setLocation(e.target.value)} />
      </label>
      <button type='submit' onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default Signup;
