import React from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Bottom from "../components/Bottom";
import wildix from "../images/fieldservice.jpg";
import { BsGear } from "react-icons/bs";
import w1 from "../images/fieldservice1.jpg";
import w2 from "../images/power.jpg";
import w3 from "../images/field.jpg";

const Fieldservice = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="h-96 w-full object-cover"
            src={wildix}
            alt="dedicated"
          />
        </div>
        <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-56 lg1:ml-10">
          <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
            Field Services
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            Optimize Your Company Day-To-Day Operations and Ensure Business
            Continuity
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
          <BsGear className="text-6xl lg1:text-8xl" />
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
            Cato Networks specializes in comprehensive field workforce
            management solutions for IT and telecom purposes. Resource
            management and automation of planning, scheduling and reporting of
            field services can become too complicated for your business. Thanks
            to our regional operations management and an extensive network of
            skilled technicians, IG Networks' field support can solve all your
            needs on the ground, no matter the complexity of the task, in over
            45 countries.
          </p>
        </div>
      </div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
            <li>
              <p>Managed by our diverse operation centers located in Africa</p>
            </li>
            <li>
              <p>24/7/365 Availability</p>
            </li>
            <li>
              <p>+45 Countries / Nationwide Coverage</p>
            </li>
            <li>
              <p>
                Certified Technicians specialized on network equipment
                manufacturers
              </p>
            </li>
            <li>
              <p>
                Everything from cable management to satellite link installation,
                we can do it
              </p>
            </li>
          </ul>
        </div>
        <div className="relative ">
          <img className="opacity-75" src={w1} alt="dee1" />

          <div className="absolute  top-44">
            <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
              Let our team of experts take care of the tech backbone for your
              business
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              className="h-96 w-full object-cover"
              src={w3}
              alt="dedicated 2"
            />
          </div>
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-32 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Onsite installation, configuration and testing of ToIP equipment
            such as IP phones, gateways and PBX
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-36 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Installation and management of power distribution unit (PDU)
          </p>
        </div>

        <div>
          <img src={w2} alt="dedicated3" />
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

export default Fieldservice;
