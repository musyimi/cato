import React from "react";
import IIot from "../images/iot4.png";
import IIot2 from "../images/iot.jpg";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";

const Iot = () => {
  return (
    <div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10">
        <div>
          <img src={IIot} alt="internet of things" />
        </div>
        <div className="mt-16 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">Cato secure</p>
          <p className="text-5xl font-bold">IOT</p>

          <p>
            Cato internet of things helps people live and work smarter, as well
            as gain complete control over their lives.
          </p>
        </div>
      </div>
      <div>
        <img className="lg1:px-20" src={IIot2} alt="internet of things" />
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

export default Iot;
