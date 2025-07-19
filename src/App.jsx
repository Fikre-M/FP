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
