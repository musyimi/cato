import React from "react";
import Ujuzi from "../images/experience1.jpg";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";

const Experience = () => {
  return (
    <div>
      <div>
        <img className=" h-96 w-full object-cover" src={Ujuzi} alt="about us" />
      </div>
      <div>
        <Bottom />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
};

export default Experience;
