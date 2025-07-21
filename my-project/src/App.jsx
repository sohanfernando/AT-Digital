import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ServiceSection from './components/ServiceSection.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServiceSection/>
      <FAQSection/>
      <Footer/>
    </>
  );
}

export default App;
