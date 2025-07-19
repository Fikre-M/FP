// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './App.css'
// import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer';
// import ThreeBoxes from './Components/ThreeBoxes/ThreeBoxes';
// import Boxes from './Components/ThreeBoxesf/ThreeBoxesf';
// import Projects from './Components/Projects/Projects';
// import ContactSection from './Components/ContactSection/ContactSection';
// import Skills from './Components/Skills/Skills';
// import ProfileGallery from './Components/ProfileGallery/ProfileGallery';

// function App() {
//   return (
//     // <div className="min-h-screen bg-gray-100">
//     <>
//       <Header />
//       <ThreeBoxes />
//       {/* <Boxes /> */}
//       < Skills />
//       <Projects />
//       <ProfileGallery />
//       <ContactSection />
//       <Footer />
//     </>

//     // </div>
//   );
// }


// export default App


import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ThreeBoxes from "./Components/ThreeBoxes/ThreeBoxes";
import Boxes from "./Components/ThreeBoxesf/ThreeBoxesf";
import Projects from "./Components/Projects/Projects";
import ContactSection from "./Components/ContactSection/ContactSection";
import Skills from "./Components/Skills/Skills";
import ProfileGallery from "./Components/ProfileGallery/ProfileGallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <ThreeBoxes />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
          <ProfileGallery />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
