import React from "react";
import { AiOutlineCloudServer } from "react-icons/ai";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import dedicated from "../images/cloud-computing.jpg";
import Bottom from "../components/Bottom";
import d1 from "../images/dedicated1.jpg";
import d2 from "../images/dedicated2.jpg";
import d3 from "../images/dedicated3.jpg";

const Dcloud = () => {
  return (
    <div>
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
              Dedicated Cloud Connection
            </div>
            <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
              Simple, flexible and secure interconnection to the main Cloud
              Service Providers
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
            <AiOutlineCloudServer className="text-6xl lg1:text-8xl" />
          </div>
          <div>
            <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
              As enterprises accelerate the adoption of Software as a Service
              (SaaS), it becomes mandatory not only to have a robust internet
              access but also a suitable solution. With Cato Networks you can
              enhance your business by reaching the main Cloud Service Providers
              (CSP) and a variety of data centers around the world. Cato
              Networks' Dedicated Cloud Connection provides an ethernet
              connection to your cloud environment through a simple, secure,
              scalable and reliable service
            </p>
          </div>
        </div>
        <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
          <div>
            <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
              <li>
                <p>More than 60 data centers around Africa</p>
              </li>
              <li>
                <p>Extensive SaaS ecosystem</p>
              </li>
              <li>
                <p>Connection speeds ranging from 10 Mbps to 100 mbps</p>
              </li>
              <li>
                <p>
                  IPv4 and IPv6 address allocation with static or dynamic
                  routing
                </p>
              </li>
              <li>
                <p>Increased traffic on demand</p>
              </li>
            </ul>
          </div>
          <div className="relative ">
            <img className="opacity-75" src={d1} alt="dee1" />

            <div className="absolute  top-44">
              <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
                Flexible configurations for your dedicated cloud connection. We
                tweak our service to meet your business' needs and offer
                industry leading support.
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
              increase traffic on demand. We know your needs change over time
              and that's why we commit to flexibility.
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
    </div>
  );
};

export default Dcloud;
