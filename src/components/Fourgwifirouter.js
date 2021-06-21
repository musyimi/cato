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
        <div className="mt-20 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">5G/Private LTE</p>

          <p className="text-center">
            LTE and 5G Wireless Edge Solutions for every network. To get
            started, choose your experience...
          </p>
        </div>
      </div>
      <div className="text-center my-10">
        <p className="text-3xl font-light">Private LTE</p>
      </div>
      <div className="mx-10">
        <p className="text-center mt-10">
          In large areas where organizations have essential connected devices
          and applications, wireless connectivity is a challenge. Wi-Fi isn’t
          secure enough and doesn’t scale well, but public LTE might not provide
          the dedicated bandwidth or cost-effectiveness you need. Private
          Cellular Networks, including Private LTE (PLTE), have emerged as the
          best option for wireless networking in sprawling spaces ranging from
          campuses, shipping ports, and refineries to Smart Cities. In these
          “wide-area LAN” scenarios, Private LTE combines the control and fixed
          costs of a private network with the flexibility, security, and
          macro-network benefits of cellular broadband — with a built-in pathway
          to Private 5G.
        </p>
      </div>
      <div className="mx-10">
        <p className=" mt-4">
          Private LTE for Enterprise and Public Sector, School districts,
          Shipping ports, Smart Cities, Oil and gas, Manufacturing, Distribution
          centers, Mines, Business, college campuses, Stadiums and Hospitals
        </p>
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
