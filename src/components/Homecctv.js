import React from "react";
import Smart from "../images/cctv.jpg";
import { RiHomeGearLine } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiCctvCamera } from "react-icons/gi";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";

const Homecctv = () => {
  return (
    <div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10">
        <div>
          <img src={Smart} alt="smart" />
        </div>
        <div className="mt-16 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">SMART HOME AUTOMATION</p>

          <p>
            Home automation gives you access to control devices in your home
            from a mobile device anywhere in the world. The term may be used for
            isolated programmable devices, like thermostats and sprinkler
            systems, but home automation more accurately describes homes in
            which nearly everything — lights, appliances, electrical outlets,
            heating and cooling systems — are hooked up to a remotely
            controllable network.
          </p>
        </div>
      </div>

      <div className="lg1:bg-gray-200 lg1:mt-10 ">
        <div className="text-center lg1:space-y-4 lg1:pt-10">
          <p className="font-bold text-4xl">What it can do for you</p>
        </div>
        <div className="lg1:grid lg1:grid-cols-4 lg1:gap-4 lg1:p-10">
          <div>
            <RiHomeGearLine className="text-7xl lg1:ml-12" />
            <div className="lg1:mt-2 space-y-1">
              <p className="text-green-500 lg1:ml-10">HOME(IOT)</p>
              <p className="">Make your home smart</p>
            </div>
          </div>
          <div>
            <MdPeopleOutline className="text-7xl lg1:ml-12" />
            <div className="lg1:mt-2 space-y-1">
              <p className="text-green-500 lg1:ml-10">PEACE OF MIND</p>
              <p className="">Don't just monitor your home-manage it.</p>
            </div>
          </div>
          <div>
            <AiOutlineCloudServer className="text-7xl lg1:ml-12" />
            <div className="lg1:mt-2 space-y-1">
              <p className="text-green-500 lg1:ml-10">EASY MONITORING</p>
              <p className="">Make your home ready for whatevers next</p>
            </div>
          </div>
          <div>
            <GiCctvCamera className="text-7xl lg1:ml-12" />
            <div className="lg1:mt-2 space-y-1">
              <p className="text-green-500 lg1:ml-10">REAL-TIME FOOTAGE</p>
              <p className="">
                Turn your house into a smart home with cato automation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 ">
        <div className="font-bold lg1:text-center lg1:text-4xl">
          <p>Getting started</p>
        </div>
        <div className="lg1:mx-20 lg1:grid lg1:grid-cols-3 lg1:mt-10">
          <div className="border-r-2">
            <p className="lg1:text-3xl lg1:font-light">SITE SURVEY</p>
            <span className="ml-24 mt-32 inline-block p-4 rounded-full border-4"></span>
          </div>
          <div className="border-r-2">
            <p className="lg1:text-3xl lg1:font-light lg1:text-center">
              QUOTATION & PRICING
            </p>
            <span className="ml-24 mt-32 inline-block p-4 rounded-full border-4"></span>
          </div>
          <div className="ml-32">
            <p className="lg1:text-3xl lg1:font-light">INSTALLATION</p>
            <span className="ml-24 mt-32 inline-block p-4 rounded-full border-4"></span>
          </div>
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

export default Homecctv;
