import React from "react";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { GiWifiRouter } from "react-icons/gi";
import { MdRouter } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import { AiTwotoneSecurityScan } from "react-icons/ai";
import { SiFSecure } from "react-icons/si";

const fibrelinks = () => {
  return (
    <div className="text-gray-50 items-center lg1:px-10 lg1:py-4 lg1:mt-4 lg1:bg-green-500">
      <div>
        <ul className="flex justify-between">
          <li>
            <Link className="text-xs" to="/homefibre">
              <RiHome2Line className="ml-4 text-4xl" />
              HOME FIBRE
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/securenet">
              <SiFSecure className="ml-4 text-4xl" />
              SECURE NET
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/fourgwifirouter">
              <GiWifiRouter className="ml-4 text-4xl" />
              5G/Private LTE
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/entertainment">
              <MdRouter className="ml-4 text-4xl" />
              ENTERTAINMENT
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/homecctv">
              <BiCctv className="ml-4 text-4xl" />
              HOME CCTV
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/iot">
              <AiTwotoneSecurityScan className="ml-4 text-4xl" />
              IOT world
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default fibrelinks;
