import React from "react";
import Offer from "../images/offers.jpg";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";

const Offers = () => {
  return (
    <div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10">
        <div>
          <img src={Offer} alt="smart" />
        </div>
        <div className="mt-16 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">Get crazy </p>
          <p className="text-5xl font-bold">offers</p>

          <p>
            Introduce 10 neighbours to smart home fibre and get a lifetime
            internet access
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

export default Offers;
