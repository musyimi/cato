import React from "react";
import ServiceLinks from "../components/ServiceLinks";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Services = () => {
  return (
    <>
      <div className="lg1:mx-20 lg1:mt-4">
        <p className="lg1:text-5xl lg1:font-serif lg1:p-4">
          Our services include
        </p>
      </div>
      <div>
        <ServiceLinks />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <Copyright />
      </div>
    </>
  );
};

export default Services;
