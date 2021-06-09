import React from "react";
import Nairobi from "../images/nairobi.jpg";

const Hero = () => {
  return (
    <div className="relative ">
      <img
        className="opacity-90 h-96 object-cover w-full"
        src={Nairobi}
        alt="hero"
      />
      <span className="absolute xs:top-10 sm1:top-20 lg1:top-32 text-gray-100 xs:text-2xl sm1:text-4xl lg1:text-7xl font-bold xs:mx-2 lg1:mx-20">
        WE CONNECT AFRICA
      </span>
    </div>
  );
};

export default Hero;
