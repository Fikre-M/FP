import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import ThreeBoxes from './Components/ThreeBoxes/ThreeBoxes';
import Boxes from './Components/ThreeBoxesf/ThreeBoxesf';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    // <div className="min-h-screen bg-gray-100">
    <>
      <Header />
      <ThreeBoxes />
      <Boxes />
      <Projects />
      <Footer />
    </>

    // </div>
  );
}


export default App
