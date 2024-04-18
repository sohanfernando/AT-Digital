import './App.css';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ServiceSection from './components/ServiceSection/ServiceSection';

function App() {
  return (
    <>
        <Header />
        <Hero />
        <ServiceSection/>
        <FAQSection/>
        <Footer/>
      </>
  );
}

export default App;
