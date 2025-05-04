import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="bg-[#242424] text-[rgba(255,255,255,0.87)] font-sans leading-relaxed font-normal min-h-screen">
      {/* Your app content */}
      <Header />
    </div>
  );
}
export default App
