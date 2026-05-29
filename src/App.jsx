import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TechStack from "./component/TechStack";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Cursor from "./component/Cursor";
import Preloader from "./component/Preloader";
import WhatsappFloat from "./component/WhatsappFloat";

function App() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Testimonials />
      <Footer />
      <WhatsappFloat />
    </>
  );
}

export default App;