import React from "react";
import Fiveg from "../images/5g.jpg";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";

const Fourgwifirouter = () => {
  return (
    <div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10">
        <div>
          <img className="h-96 object-cover w-full" src={Fiveg} alt="smart" />
        </div>
        <div className="mt-16 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">5G/Private LTE</p>

          <p>
            5G will provide the speed, low latency and connectivity to enable a
            new generation of applications, services and business opportunities
            that have not been seen before
          </p>
        </div>
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

export default Fourgwifirouter;
