import React from "react";
import Hero from "../components/HomePage/Hero";
import Features from "../components/HomePage/Features";
import Stats from "../components/HomePage/Stats";
import Testimonials from "../components/HomePage/Testimonials";
import Moto from "../components/HomePage/Moto";
import Branches from "../components/HomePage/Branches";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <Moto />
      <Branches />
      <Testimonials />
    </>
  );
};

export default Home;
