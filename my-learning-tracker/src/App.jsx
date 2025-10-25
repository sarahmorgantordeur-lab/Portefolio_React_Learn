import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameLevel from './SkillCard.jsx'


function App() {
  return (
    <>
    <div className='flex flex-center text-red-500'>
      <h1 className='text-red-500'>My Learning Tracker 📘</h1>
      <p>Bienvenue dans ton premier projet React !</p>
    </div>
    <NameLevel/>
    </>
  );
}

export default App;