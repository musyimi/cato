import React from "react";
import { FcHome } from "react-icons/fc";
import { SiDcentertainment } from "react-icons/si";
import { GrGamepad, GrTestDesktop } from "react-icons/gr";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Ask = () => {
  return (
    <div>
      <div className="mx-10 lg1:grid lg1:grid-cols-2">
        <div>
          <FcHome className="lg1:h-96 lg1:w-96" />
        </div>
        <div>
          <p className="lg1:text-4xl lg1:font-bold lg1:mt-20">
            Get connected to Cato home Fibre
          </p>
          <form className="flex flex-col mt-10" action="">
            <label for="name">Your Name</label>
            <input type="text" name="name" placeholder="Your Name"></input>

            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Your Email"></input>

            <label for="area">Area</label>
            <input type="text" name="area" placeholder="Area"></input>
          </form>
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
    </div>
  );
};

export default Ask;
