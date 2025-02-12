import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import Services from "./components/Services";


const App = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Services />

    </div>
  );
};

export default App;
