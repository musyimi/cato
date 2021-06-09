import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="xs:px-2 lg1:grid lg1:grid-cols-2 bg-gray-400">
      <div className="p-2 ">
        <form
          method="post"
          autoComplete="off"
          className="flex flex-col space-y-4"
        >
          <label for="name">Your Name</label>
          <input
            className="w-full border-green-400 border-4 rounded-lg shadow-sm focus:border-green-600 focus:ring-green-600"
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>

          <label for="email">Email</label>
          <input
            className="w-full border-green-400 border-4 rounded-lg shadow-sm focus:border-green-600 focus:ring-green-600"
            type="email"
            name="email"
            placeholder="Your Email"
          ></input>

          <label for="message">Message</label>
          <textarea
            className="w-full border-green-400 border-4 rounded-lg shadow-sm focus:border-green-600 focus:ring-green-600"
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>

          <input
            className="p-2 rounded-lg shadow-sm focus:border-green-600 focus:ring-green-600"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div>
        <div className="border-b-2 mb-4 mt-10 xs:p-2 xs:space-y-2 lg1:pb-10">
          <div>
            <p className="text-3xl font-thin lg1:text-5xl">Get Connected</p>
          </div>
          <div>
            <p className="text-xl font-semibold lg1:text-2xl">
              24/7 TECH SUPPORT
            </p>
          </div>
          <div className="font-thin lg1:text-xl">
            <div className="flex items-center space-x-2">
              <p className="text-2xl">
                <HiOutlineMail />
              </p>

              <p>support@catonetworks.co.ke</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-2xl">
                <BiPhone />
              </p>
              <p>+254 796333111 / +254 753600024 / +254 100254100</p>
            </div>
          </div>

          <div>
            <p className="font-semibold lg1:text-2xl">SALES</p>
          </div>
          <div className="font-thin lg1:text-xl">
            <div className="flex items-center space-x-2">
              <p className="text-2xl">
                <HiOutlineMail />
              </p>

              <p>sales@catonetworks.co.ke</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-2xl">
                <BiPhone />
              </p>
              <p>+254 796333111 / +254 753600024 / +254 100254100</p>
            </div>
          </div>
        </div>
        <div className="xs:space-y-4 text-xl lg1:pb-20 lg1:pt-10">
          <div className="font-thin">
            <p className="">
              Cato Networks offers high quality telecommunications data services
              to customers in Africa and provides a single point of contact for
              quoting, installation, operation and billing
            </p>
          </div>
          <div className="font-thin">
            <p>
              With operational services in several countries, Cato networks
              stands out as a company with a high degree of regional competence
              and offers its customers a single-source full-fledged solution,
              whether in remote regions or highly developed urban areas. .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
