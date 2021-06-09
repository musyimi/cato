import React from "react";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";
import broadband from "../images/broadband.jpg";
import { CgEthernet } from "react-icons/cg";
import b1 from "../images/broadband1.jpg";
import b2 from "../images/broadband2.jpg";
import b3 from "../images/broadband3.jpg";

const Broadband = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="h-96 w-full object-cover"
            src={broadband}
            alt="dedicated"
          />
        </div>
        <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-56 lg1:ml-10">
          <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
            Broadband Internet Access
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            Business grade connection with class leading reliability
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
          <CgEthernet className="text-6xl lg1:text-8xl" />
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
            IG Networks' broadband internet fits your business needs. We offer
            asymmetrical access through several technologies such as fiber
            optics, coaxial cable modem and wireless links. This is a
            cost-effective and simple service that can be used as a backup to
            dedicated services or as a primary solution for small offices or
            non-critical locations.
          </p>
        </div>
      </div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
            <li>
              <p>Assymetrical service</p>
            </li>
            <li>
              <p>Bandwidth scaling from 10 Mpbs to 1000 Mbps</p>
            </li>
            <li>
              <p>24/7 specialized help desk</p>
            </li>
            <li>
              <p>IPv4 or IPv6 support</p>
            </li>
            <li>
              <p>Unmatched coverage</p>
            </li>
          </ul>
        </div>
        <div className="relative ">
          <img className="opacity-75 " src={b1} alt="dee1" />

          <div className="absolute  top-44">
            <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
              "Stay on line with our class leading Broadband Internet Access"
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={b2} alt="dedicated 2" />
          </div>
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-32 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            A reliable and fast connection that lets you focus on expanding your
            business. Our commitment is to provide the best posible experience.
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-32 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            We use all of our infrastructure and our partners' to go wherever
            you need. Stay connected in even the most isolated regions.
          </p>
        </div>

        <div>
          <img className="h-96 w-full object-cover" src={b3} alt="dedicated3" />
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

export default Broadband;
