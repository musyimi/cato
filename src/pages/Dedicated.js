import React from "react";
import { CgUsb } from "react-icons/cg";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import dedicated from "../images/dedicated.jpg";
import Bottom from "../components/Bottom";
import d1 from "../images/dedicated1.jpg";
import d2 from "../images/dedicated2.jpg";
import d3 from "../images/dedicated3.jpg";

const Dedicated = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="h-96 w-full object-cover"
            src={dedicated}
            alt="dedicated"
          />
        </div>
        <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-48 lg1:ml-10">
          <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
            Dedicated Internet Access
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            Boost your business with a fast, reliable and secure connection
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
          <CgUsb className="text-6xl lg1:text-8xl" />
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
            Cato Networks offers solutions ranging from corporate internet
            access to wholesale transit ports that best fit our costumer
            requirements. Our Dedicated Internet Access has the right balance of
            peering to the most important content providers in every country.
            Costumers can run their international SaaS applications seamlessly
            while keeping the best access to local content. For cloud and
            content delivery applications we offer flexible solutions with
            direct connectivity to specific local, regional and international
            providers such as AWS, Google Cloud and Azure.
          </p>
        </div>
      </div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
            <li>
              <p>Coverage includes more than 45 countries in the Africa</p>
            </li>
            <li>
              <p>
                Access technologies include fiber optics, HFC and terrestrial
                wireless with bandwidths ranging from 1 Mbps to 10 Gbps
              </p>
            </li>
            <li>
              <p>
                Service Level Agreement with 99.5% to 99.99% availability using
                redundant links with diverse infrastructure
              </p>
            </li>
            <li>
              <p>
                24/7 multilingual support through our Costumer Service Center
                and a web-based ticketing portal
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
          <img className="opacity-75" src={d1} alt="dee1" />

          <div className="absolute  top-44">
            <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
              "A flexible service that is scalable on demand"
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={d2} alt="dedicated 2" />
          </div>
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-44 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Dedicated connections with the main service and content providers.
            Get the most of your network so you can grow your business.
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-44 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Simple process to upgrade your service on demand. With IG Networks'
            platform, quotations and shopping have never been easier.
          </p>
        </div>

        <div>
          <img src={d3} alt="dedicated3" />
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

export default Dedicated;
