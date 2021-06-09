import React from "react";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { GiGearHammer } from "react-icons/gi";
import { AiOutlineGift } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className="lg1:mx-20 lg1:mt-10 lg1:grid lg1:grid-cols-3 lg1:gap-4">
        <div className="border-2 border-green-500 rounded-xl lg1:py-8 lg1:px-4  lg1:space-y-20">
          <div className="lg1:text-xl">TECHNICAL SUPPORT 24 HOURS</div>
          <div className="ml-20 text-9xl">
            <GiGearHammer />
          </div>
          <div className="lg1:text-sm">
            <div className="flex items-center text-xl space-x-1">
              <div>
                <HiOutlineMail />
              </div>
              <div>support@catonetworks.co.ke</div>
            </div>
            <div className="flex items-center text-xl space-x-1">
              <div>
                <BiPhone />
              </div>
              <div>Tel: +254 796333111</div>
            </div>
          </div>
        </div>
        <div className="border-2 border-green-500 rounded-xl lg1:py-8 lg1:px-4 lg1:space-y-20">
          <div className="lg1:text-xl">SALES SUPPORT</div>
          <div className="ml-20 text-9xl">
            <AiOutlineGift />
          </div>
          <div className="lg1:text-sm">
            <div>Email: sales@catonetworks.co.ke</div>
            <div>Tel: +254 753600024</div>
            <div>Tel: +254 796333111</div>
          </div>
        </div>
        <div className="border-2 border-green-500 rounded-xl lg1:py-8 lg1:px-4 lg1:space-y-20">
          <div className="lg1:text-xl">WORK WITH US</div>
          <div className="ml-20 text-9xl">
            <FaRegHandshake />
          </div>
          <div className="lg1:text-sm">
            <div>Email: hr@catonetworks.co.ke</div>
            <div>enquiries: info@catonetworks.co.ke</div>
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
    </>
  );
};

export default ContactUs;
