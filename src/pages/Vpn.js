import React from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Bottom from "../components/Bottom";
import network from "../images/newtork.jpg";
import { CgEthernet } from "react-icons/cg";
import n1 from "../images/network1.jpg";
import n2 from "../images/network2.jpg";
import n3 from "../images/network3.jpg";

const Vpn = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="h-96 w-full object-cover"
            src={network}
            alt="dedicated"
          />
        </div>
        <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-56 lg1:ml-10">
          <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
            IP VPN Multiprotocol Label Switching
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            Boost your business with a high performance Virtual Private Network
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
          <CgEthernet className="text-6xl lg1:text-8xl" />
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
            Supported by our international backbone of more than 5 nodes, Cato
            Networks' Multiprotocol Label Switching (MPLS) service allow us to
            deliver carrier grade connections to your business. Interconnect
            your branches and increase your transactions with a single service
            provider. We help you consolidate your applications with a secure
            network infrastructure.
          </p>
        </div>
      </div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
            <li>
              <p>Presence in 45 countries with more than 5 nodes</p>
            </li>
            <li>
              <p>
                Domestic and international transport with up to 100 Gbps
                bandwidth
              </p>
            </li>
            <li>
              <p>
                Service Level Agreement with 99.5% to 99.99% with redundant
                links and diverse infrastructure
              </p>
            </li>
            <li>
              <p>
                Ensured data protection with private and dedicated connections
              </p>
            </li>
            <li>
              <p>
                Express and standardized quotation process supported by Cato
                Networks' powerful real-time platform
              </p>
            </li>
          </ul>
        </div>
        <div className="relative ">
          <img className="opacity-75" src={n1} alt="dee1" />

          <div className="absolute  top-44">
            <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
              "A Virtual Private Network with maximum security and availability"
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="h-96 w-full object-cover"
              src={n2}
              alt="dedicated 2"
            />
          </div>
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-36 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Connect all your branches securely and boost your transactions with
            a service that is reliable and available when you most need it.
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-36 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Cato Networks provides the best VPN services with sufficient
            bandwidth to run the most demanding applications across Africa.
          </p>
        </div>

        <div>
          <img className="h-96 w-full object-cover" src={n3} alt="dedicated3" />
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

export default Vpn;
