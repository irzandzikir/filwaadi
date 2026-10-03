import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Founders from './components/Founders';
import History from './components/History';
import VisionMission from './components/VisionMission';
import EducationUnits from './components/EducationUnits';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Founders />
      <History />
      <VisionMission />
      <EducationUnits />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
