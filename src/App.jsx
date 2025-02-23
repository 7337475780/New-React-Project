import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Appliances from "./components/Accessories";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Services />
      <Appliances />
      <Contact />
      <Footer />


    </div>
  );
};

export default App;

