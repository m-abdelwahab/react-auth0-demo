import React from "react";
import { Testimonials, FAQs, Features, Navbar, Hero } from "../components";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQs />
    </div>
  );
};

export default Landing;
