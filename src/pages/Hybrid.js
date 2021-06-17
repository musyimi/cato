import React from "react";
import Bottom from "../components/Bottom";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import hybrid from "../images/hybrid.jpg";
import { CgEthernet } from "react-icons/cg";
import h1 from "../images/hybrid1.jpg";
import h2 from "../images/hybrid2.jpg";
import h3 from "../images/hybrid3.jpg";

const Hybrid = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="h-96 w-full object-cover"
            src={hybrid}
            alt="dedicated"
          />
        </div>
        <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-56 lg1:ml-10">
          <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
            Hybrid Dynamic Network
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            The Software-Defined Wide Area Network (SD-WAN) solution from Cato
            Networks
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
          <CgEthernet className="text-6xl lg1:text-8xl" />
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
            Hybrid Dynamic Network (HDN) is Cato Networks innovative
            “SD-WAN-as-a-Service” solution, which has proven to be the best
            alternative to traditional MPLS and layer 2 connections. These
            products allow fast deployment of branch offices with high
            availability and improved connection to cloud service providers
            without the complications and risks of adopting a specific vendor.
            Cato Networks addresses the complexity of adopting an SD-WAN
            platform by providing a managed network with superior availability.
            HDN has four alternatives to meet our customers' most challenging
            needs: Hybrid Dynamic Broadband (HDB), Hybrid Dynamic Internet
            (HDI), Hybrid Dynamic VPN (HDV) and Hybrid Dynamic Wireless (HDW)
          </p>
        </div>
      </div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
            <li>
              <p>Redundant services with industry leading availability</p>
            </li>
            <li>
              <p>Fast deployment with global coverage</p>
            </li>
            <li>
              <p>Load balancing, WAN optimization and traffic control</p>
            </li>
            <li>
              <p>
                Integrated Next Generation Firewall (NGFW) and Secure Access
                Service Edge (SASE)
              </p>
            </li>
            <li>
              <p>Service Level Agreement with 99.0% to 99.99% availability</p>
            </li>
          </ul>
        </div>
        <div className="relative ">
          <img className="opacity-75" src={h1} alt="dee1" />

          <div className="absolute  top-44">
            <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
              "Be part of the evolution of Wide Area Networks"
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={h2} alt="dedicated 2" />
          </div>
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-32 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Cato Networks' SD-WAN solution lets you proactively manage your
            network with dashboards and reports so you can keep track of your
            service's performance.
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-32 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Adopt a Hybrid Dynamic Network and keep your business ahead of the
            competition with secure and reliable connections to cloud services.
          </p>
        </div>

        <div>
          <img src={h3} alt="dedicated3" />
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

export default Hybrid;
