import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Board from './components/Board';
import Oranges from './assets/Oranges.jpg';

function App() {

  return (
    <>
    <Board size={100} pictureUrl={Oranges}/>
    </>
  )
}

export default App
