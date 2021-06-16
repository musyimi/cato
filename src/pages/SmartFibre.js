import React from "react";
import { SiFacebook } from "react-icons/si";
import Smart from "../images/catoimage.jpeg";
import { SiDcentertainment } from "react-icons/si";
import { GrGamepad, GrTestDesktop } from "react-icons/gr";
import Fibrelinks from "../components/fibrelinks";
import Smartfibretop from "../components/Smartfibretop";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";

import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillSafetyCertificate,
} from "react-icons/ai";

const SmartFibre = () => {
  return (
    <div>
      <div className="flex justify-between lg1:mx-10 lg1:p-2 font-bold">
        <div>
          <Smartfibretop />
        </div>
        <div className="lg1:col-start-9 ">
          <ul className="flex lg1:space-x-4 text-2xl">
            <li>
              <SiFacebook />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
            <li>
              <AiFillYoutube />
            </li>
            <li>
              <AiFillInstagram />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Fibrelinks />
      </div>

      <div className="lg1:grid lg1:grid-cols-2">
        <div>
          <img src={Smart} alt="smart" />
        </div>
        <div className="mt-16 p-4 space-y-2">
          <p className="text-5xl font-bold">Enjoy every moment</p>
          <p className="text-5xl font-bold">with Cato</p>
          <p className="text-5xl font-bold">HOME</p>
          <p>An amazing experience awaits you right at home.</p>
        </div>
      </div>
      <div className="bg-gray-200 ">
        <div className="text-center text-4xl font-semibold lg1:pt-16">
          <p>Access limitless possibilities from the comfort of your </p>
          <p>home</p>
        </div>
        <div className="lg1:mx-10 lg1:mt-16">
          <ul className="flex justify-around ">
            <li className="space-y-2">
              <SiDcentertainment className="text-8xl" />
              <p className="text-xl text-green-600">Entertainment</p>
            </li>
            <li className="space-y-2">
              <GrGamepad className="text-8xl" />
              <p className="text-xl text-green-600">Gaming</p>
            </li>
            <li className="space-y-2">
              <GrTestDesktop className="text-8xl" />
              <p className="text-xl text-green-600">Learning</p>
            </li>
            <li className="space-y-2">
              <AiFillSafetyCertificate className="text-8xl" />
              <p className="text-xl text-green-600">Safety</p>
            </li>
          </ul>
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

export default SmartFibre;
