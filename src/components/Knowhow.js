import React from "react";
import cranes from "../images/cranes.jpg";
import helipad from "../images/helipad.jpg";
import site from "../images/site.jpg";
import turbine from "../images/turbine.jpg";

const Knowhow = () => {
  return (
    <div className=" xs:mt-3 xs:space-y-2 lg1:px-20">
      <p className="font-light text-xl text-gray-500 xs:mx-2 lg1:flex lg1:justify-center lg1:text-5xl lg1:font-thin lg1:pt-10">
        Our Know-how At Your Command
      </p>
      <p className="xs:mx-5 font-semibold lg1:pt-6 lg1:text-center">
        We offer Wide Area Network (WAN) services for global providers and
        carriers in North America, Latin America and the Caribbean. Our WAN
        solutions include controlled implementation, on-schedule delivery for
        final users and 24/7 technical support.
      </p>

      <div className="sm1:grid sm1:grid-cols-4 sm1:grid-rows-2 lg1:pt-10 ">
        <div className="inset-0">
          <p className="w-full h-full bg-green-100 xs:px-2 xs:py-3 font-semibold text-green-900">
            Increase your revenue by offering high quality telecommunication
            services in your preferred region.
          </p>
        </div>

        <div className="inset-0">
          <img className="h-full w-full" src={cranes} alt="cranes" />
        </div>

        <div className="inset-0">
          <p className="w-full h-full bg-green-400 xs:px-2 xs:py-3 font-semibold text-green-900 ">
            Our connectivity spans through all urban and remote areas across the
            american continent.
          </p>
        </div>
        <div className="inset-0">
          <img className="h-full w-full" src={helipad} alt="helipad" />
        </div>

        <div className="inset-0">
          <img className="h-full w-full" src={site} alt="site" />
        </div>
        <div className="inset-0">
          <p className="w-full h-full bg-green-100 xs:px-2 xs:py-3 font-semibold text-green-900 ">
            Each project demands specific training, skills and procedures. We
            make sure everything is right in order to offer unmatched quality
            and service.
          </p>
        </div>

        <div className="inset-0">
          <img className="h-full w-full" src={turbine} alt="turbine" />
        </div>

        <div className="inset-0">
          <p className="w-full h-full bg-green-400 xs:px-2 xs:py-3 font-semibold text-green-900 ">
            Our work builds upon experience and good relationships with local
            partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Knowhow;
