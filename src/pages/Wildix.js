import React from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Bottom from "../components/Bottom";
import wildix from "../images/wildix.jpg";
import { CgEthernet } from "react-icons/cg";
import w1 from "../images/wildix1.jpg";
import w2 from "../images/wildix2.jpg";
import w3 from "../images/wildix3.jpg";

const Wildix = () => {
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
            Wildix
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            The first cloud browser-based Unified Communications and VoIP PBX
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center xs:mt-4 sm1:mt-6 lg1:mt-20">
          <CgEthernet className="text-6xl lg1:text-8xl" />
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mx-10 lg1:mt-10 lg1:text-2xl">
            Today’s communications run on numerous channels: smartphones, PCs,
            desk phones, software, chat messages, sms texting, sharing
            documents, video calling and more. Too many channels add complexity
            to business communication, which should be simple because it is the
            basis of every business activity. Unified Communications and
            Collaboration (UC&C) is the architecture that allows you to call,
            email, chat, share your screen, send documents, make video calls and
            much more from a single interface provided by IG Networks.
          </p>
        </div>
      </div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <ul className="lg1:p-10 lg1:space-y-20 lg1:text-2xl lg1:text-green-500 lg1:font-semibold lg1:object-contain">
            <li>
              <p>Cloud based PBX with web-based real time communications</p>
            </li>
            <li>
              <p>Full integration to the PSTN with SIP trunk and legacy TDM</p>
            </li>
            <li>
              <p>Pay only for user, not for PBX</p>
            </li>
            <li>
              <p>Wide variety of desktop phones with leasing options</p>
            </li>
            <li>
              <p>iOS and Android apps with push notifications</p>
            </li>
          </ul>
        </div>
        <div className="relative ">
          <img className="opacity-75" src={w1} alt="dee1" />

          <div className="absolute  top-44">
            <p className="text-gray-50 font-thin xs:text-2xl xs:p-2 sm1:p-3 sm1:text-4xl lg1:text-4xl lg1:p-4">
              "Calls, web conferencing, emails, documents and more from a single
              platform"
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
            Wildix has integrated and enhanced security that keeps your
            communications private between your branches regardless of location.
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-32 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Collaborate by sharing your desktop and and enrich your work with
            chat, audio and video. All accesible within a single web-interface
            provided by IG Networks.
          </p>
        </div>

        <div>
          <img src={w2} alt="dedicated3" />
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

export default Wildix;
