import React from "react";
import Client from "../images/client.jpg";
import Clientportalflaglinks from "../components/Clientportalflaglinks";

const ClientPortal = () => {
  return (
    <div>
      <div>
        <img
          className="h-96 w-full object-cover"
          src={Client}
          alt="client portal"
        />
      </div>
      <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-48 lg1:ml-10">
        <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
          Cato client data portals
        </div>
      </div>
      <div className="text-center bg-green-400 lg1:p-20">
        <p className="text-5xl">Our client portals</p>
      </div>
      <div className="text-center  lg1:p-20">
        <p className="text-5xl">Africa</p>
        <div className="lg1:grid lg1:grid-cols-3 lg1:gap-4 lg1:px-20 lg1:pt-10">
          <div>
            <p className="lg1:text-3xl">NeedITHelp</p>
          </div>
          <div>
            <p className="lg1:text-3xl">Smart home fibre</p>
          </div>
          <div>
            <p className="lg1:text-3xl">Managed center</p>
          </div>
        </div>
      </div>
      <div className="text-center lg1:p-20">
        <p className="text-5xl">East Africa</p>
        <p className="lg1:pt-4">Choose your country...</p>

        <div>
          <Clientportalflaglinks />
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
