import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";


const App = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
    </div>
  );
};

export default App;
