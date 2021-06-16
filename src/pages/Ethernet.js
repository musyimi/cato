import React from "react";
import { CgEthernet } from "react-icons/cg";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import ethernet from "../images/ethernet.jpg";
import Bottom from "../components/Bottom";
import e1 from "../images/ethernet1.jpg";
import e2 from "../images/ethernet2.jpg";
import e3 from "../images/ethernet3.jpg";

const Ethernet = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="h-96 w-full object-cover"
            src={ethernet}
            alt="dedicated"
          />
        </div>
        <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-48 lg1:ml-10">
          <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
            Ethernet Access
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            The optimal Layer 2 solution for the wholesale market
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
          <CgEthernet className="text-6xl lg1:text-8xl" />
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
            Cato Networks' ethernet access is designed to provide carrier
            networks services throughout 53 countries in the Africa. It is
            supported by a network infrastructure that allow us to expand and
            complement carriers' footprint with a full range of fiber optics,
            Hybrid Fiber Coaxial (HFC) and wireless solutions.
          </p>
        </div>
      </div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
            <li>
              <p>
                Support for E-LAN, Dedicated E-LINE and Switched E-LINE
                architectures{" "}
              </p>
            </li>
            <li>
              <p>
                Domestic and international metro transport with bandwidths up to
                100 Gbps
              </p>
            </li>
            <li>
              <p>
                Network-Network Interface (NNI) with more than 95 nodes in 45
                countries
              </p>
            </li>
            <li>
              <p>
                Service Level Agreement with 99.5% to 99.99% availability and
                redundant links
              </p>
            </li>
            <li>
              <p>
                Express and standardized quotation process supported by IG
                Networks' powerful real-time platform
              </p>
            </li>
          </ul>
        </div>
        <div className="relative ">
          <img className="opacity-75" src={e1} alt="dee1" />

          <div className="absolute  top-44">
            <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
              "Expand your network and reach new horizons for your business"
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={e2} alt="dedicated 2" />
          </div>
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-44 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Fiber optics, coaxial cable and wireless links ensure connectivity
            where others only dream of. Reach all corners of Africa.
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-44 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Expand your network with ample bandwidth to offer and access
            services that will help grow your business.
          </p>
        </div>

        <div>
          <img className="h-96 w-full object-cover" src={e3} alt="dedicated3" />
        </div>
      </div>

      <div>
        <Bottom />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Ethernet;
