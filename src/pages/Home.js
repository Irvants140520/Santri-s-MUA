import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Testimonials />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;