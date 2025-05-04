import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
    </div>
  );
}


export default App
