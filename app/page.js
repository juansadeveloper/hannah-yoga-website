import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <About /> */}
      {/* <Contact /> */}
      <Footer />  
    </main>
  );
}
