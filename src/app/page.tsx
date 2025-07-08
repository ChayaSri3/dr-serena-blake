'use client';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services'; // ✅ Add this
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services /> {/* ✅ Confirm this is present */}
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
