import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import ThreeBoxes from './Components/ThreeBoxes/ThreeBoxes';

function App() {
  return (
    // <div className="min-h-screen bg-gray-100">
    <>
      <Header />
      <ThreeBoxes />
      <Footer />
    </>

    // </div>
  );
}


export default App
