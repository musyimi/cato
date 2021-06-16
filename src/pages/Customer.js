import React from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Bottom from "../components/Bottom";
import customer from "../images/customer.jpg";
import { GiWifiRouter } from "react-icons/gi";
import c1 from "../images/customer1.jpg";
import c2 from "../images/customer2.jpg";
import c3 from "../images/customer3.jpg";

const Customer = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="h-96 w-full object-cover"
            src={customer}
            alt="dedicated"
          />
        </div>
        <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-56 lg1:ml-10">
          <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
            Costumer Premises Equipment
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            Turnkey equipment choices to compliment your infrastructure and
            network design.
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
          <GiWifiRouter className="text-6xl lg1:text-8xl" />
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
            In the era of Network Functions Virtualization (NFV) and SD-WAN,
            Customer Premises Equipment is turning more into a commodity. Cato
            Networks' CPE service provides your business with the necessary
            equipment in over 45 countries around the world as a convenient
            leasing plan. Forget about the complexity of purchasing and shipping
            routers, switches or firewalls as well as managing the necessary
            resources to deploy them. Allow us to simplify your operations so
            you can solely concentrate in expanding your business.
          </p>
        </div>
      </div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
            <li>
              <p>
                Expertise in multiple platforms (Cisco, Juniper, Fortinet, among
                many others)
              </p>
            </li>
            <li>
              <p>Flexible menu of leasing options and support schemes</p>
            </li>
            <li>
              <p>Management of services and licenses</p>
            </li>
            <li>
              <p>English, Spanish and Portuguese 24/7 NOC regional support</p>
            </li>
            <li>
              <p>Multi vendor, Industry-certified, highly skilled IT experts</p>
            </li>
          </ul>
        </div>
        <div className="relative ">
          <img className="opacity-75" src={c1} alt="dee1" />

          <div className="absolute  top-44">
            <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
              Our leasing plans provide you with new and well managed equipment
              to grow your business
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={c2} alt="dedicated 2" />
          </div>
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-44 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Proven tools for monitoring, management and reporting
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-36 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Onsite hardware maintenance, upgrades & optimization
          </p>
        </div>

        <div>
          <img className="h-96 w-full object-cover" src={c3} alt="dedicated3" />
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

export default Customer;
