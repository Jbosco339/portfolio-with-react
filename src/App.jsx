import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import FloatingButtons from "./component/FloatingButtons";
import Testimonials from "./component/Testimonials";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      
      <Footer />

       <FloatingButtons />
    </div>
  );
}

export default App;