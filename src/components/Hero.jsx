import React from "react";
import { Carousel } from "flowbite-react";
import heroImg1 from "../assets/Hero1.png";
import heroImg2 from "../assets/Hero2.png";
import heroImg3 from "../assets/Hero3.png";
import heroImg4 from "../assets/Hero4.png";
import heroImg5 from "../assets/Hero5.png";

const Hero = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={heroImg1} alt="..." />
        <img src={heroImg2} alt="..." />
        <img src={heroImg3} alt="..." />
        <img src={heroImg4} alt="..." />
        <img src={heroImg5} alt="..." />
      </Carousel>
    </div>
  );
};

export default Hero;
