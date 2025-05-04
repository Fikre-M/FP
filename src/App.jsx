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















// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Header";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Works from "./pages/Works";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/works" element={<Works />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
