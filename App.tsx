import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;