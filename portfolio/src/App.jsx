import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import ThreeBoxes from './Components/ThreeBoxes/ThreeBoxes';
import Skill from './Components/Skills/Skill';

function App() {
  return (
    // <div className="min-h-screen bg-gray-100">
    <>
      <Header />
      <ThreeBoxes />
      <Skill />
      <Footer />
    </>

    // </div>
  );
}


export default App
