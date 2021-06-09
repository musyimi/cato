import React from "react";
import { MdUsb } from "react-icons/md";

const Work = () => {
  return (
    <div className="bg-green-700 text-gray-50 xs:pb-4 xs:pt-4 xs:px-2 lg1:px-20 lg1:mt-10">
      <p className="flex xs:justify-center font-light text-2xl lg1:text-6xl lg1:font-thin lg1:p-4">
        We Make It Work
      </p>
      <p className="xs:pt-2 lg1:text-center lg1:pt-10">
        Enjoy tailor-made solutions with our comprehensive service catalog.
        Through our infrastructure and partnerships we can reach all corners of
        the Americas to provide the necessary tools for reliable and always-on
        connectivity. We offer field service with on-site interventions as well
        as support for Costumer Premises Equipment (CPE)
      </p>

      <div className="sm1:grid sm1:grid-cols-3 sm1:grid-rows-3 sm1:gap-3 lg1:pt-10">
        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center ">
            <p className="xs:text-xl xs:mt-6">Dedicated Internet Access</p>
          </div>
          <div>
            <p className="flex xs:justify-center xs:text-xs xs:mt-4 font-extralight">
              Direct links to the main ISPs in every country
            </p>
          </div>
        </div>

        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center ">
            <p className="xs:text-xl xs:mt-6">Ethernet Connectivity</p>
          </div>
          <div>
            <p className="flex xs:justify-center xs:text-xs xs:mt-4 font-extralight">
              Layer 2 Ethernet domestic and international connections
            </p>
          </div>
        </div>

        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center">
            <p className=" xs:text-xl xs:mt-6 ">
              IP VPN Multiprotocol Label <span>Switching</span>
            </p>
          </div>
          <div>
            <p className="flex xs:justify-center xs:text-xs xs:mt-4 font-extralight">
              Dedicated high quality VPN service
            </p>
          </div>
        </div>

        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center ">
            <p className="xs:text-xl xs:mt-6">Broadband Internet Access</p>
          </div>
          <div>
            <p className="flex xs:justify-center xs:text-xs xs:mt-4 font-extralight">
              Broadband Internet Access wherever you need it.
            </p>
          </div>
        </div>

        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center">
            <p className="xs:text-xl xs:mt-6">Dedicated Cloud Connection</p>
          </div>
          <div>
            <p className="flex xs:justify-center xs:text-xs xs:mt-4 xs:text-center font-extralight">
              Direct and seamless connection with the main Cloud Service
              Providers
            </p>
          </div>
        </div>

        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center">
            <p className="xs:text-xl xs:mt-6">Hybrid Dynamic Networks</p>
          </div>
          <div>
            <p className="flex font-extralight xs:justify-center xs:text-xs xs:mt-4">
              Software defined WAN(SD-WAN) solutions from Cato Networks
            </p>
          </div>
        </div>

        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center">
            <p className="xs:text-xl xs:mt-6">WILDIX</p>
          </div>
          <div>
            <p className="flex font-extralight xs:justify-center xs:text-xs xs:mt-4">
              Unified communications as a Service (UcaaS) from Cato Networks
            </p>
          </div>
        </div>

        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center">
            <p className="xs:text-xl xs:mt-6">CUSTOMER PREMISES EQUIPMENT</p>
          </div>
          <div>
            <p className="flex font-extralight xs:justify-center xs:text-xs xs:mt-4">
              Wide variety of turnkey solutions that fit every need
            </p>
          </div>
        </div>

        <div>
          <div className="flex xs:justify-center xs:mt-6 text-8xl text-gray-50">
            <MdUsb />
          </div>
          <div className="flex xs:justify-center">
            <p className="xs:text-xl xs:mt-6">FIELD SUPPORT</p>
          </div>
          <div>
            <p className="flex font-extralight xs:justify-center xs:text-xs xs:mt-4">
              Optimize your daily operations to have a more reliable business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
