import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './components/Board';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Oranges from './assets/Oranges.jpg';

function App() {

  return (
    <>
     <Router>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
