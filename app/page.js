import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Join from "./components/Join";
import Why from "./components/Why";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About /> 
      <Join />
      <Why />
      <Quote />
      <Contact /> 
      <Footer />  
    </main>
  );
}
