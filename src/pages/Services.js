import React from "react";
import ServiceLinks from "../components/ServiceLinks";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Services = () => {
  return (
    <>
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
