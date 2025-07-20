import { useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/AboutPage/About";
import ContactSection from "./Components/ContactSection/ContactSection";
import Skills from "./Components/Skills/Skills";
import ProjectGallery from "./Components/ProjectGallery/ProjectGallery";


function App() {
  useEffect(() => {
    // Remove the hash from the URL (if present)
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    // Scroll to the very top
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="home">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <ProjectGallery />
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
