import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Team/>
    <Contact/>
    </>
  )
}

export default App; 