import React from "react";
import Smart from "../images/smart1.jpg";
import { SiDcentertainment } from "react-icons/si";
import { GrGamepad, GrTestDesktop } from "react-icons/gr";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Get = () => {
  return (
    <div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10">
        <div>
          <img src={Smart} alt="smart" />
        </div>
        <div className="mt-4 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">Get in touch with us.</p>

          <form
            action="mail.php"
            method="post"
            autoComplete="off"
            className="flex flex-col space-y-4"
          >
            <label for="name">Your Name</label>
            <input type="text" name="name" placeholder="Your Name"></input>

            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Your Email"></input>

            <label for="message">Message</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            <input type="submit" value="Submit" />
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

export default Get;
