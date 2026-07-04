import Contact from "./components/contact";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </>
  );
}

export default App;