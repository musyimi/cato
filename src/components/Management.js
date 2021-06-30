import React from "react";
import { FaSignal } from "react-icons/fa";
import { GiWifiRouter } from "react-icons/gi";
import { GiServerRack } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { GiAfrica } from "react-icons/gi";

const midnav = () => {
  return (
    <div className="bg-green-500 bg-opacity-70 xs:px-2  pb-4 relative lg1:px-20 lg1:pt-40 lg1:pb-40">
      <ul className="flex xs:ml-3 xs:pt-4 xs:space-x-4 text-4xl z-10 text-green-900">
        <li>
          <FaSignal />
        </li>
        <li>
          <GiWifiRouter />
        </li>
        <li>
          <GiServerRack />
        </li>
        <li>
          <FiPhone />
        </li>
      </ul>
      <div className="absolute right-0 top-32 ">
        <GiAfrica className="xs:hidden lg1:flex z-10 lg1:h-72 lg1:w-72" />
      </div>
      <div className=" xs:space-y-2 xs:mt-3 text-gray-100 ">
        <p className="font-light text-xl lg1:text-6xl lg1:font-thin">
          Global Management, Local Expertise
        </p>
        <p className="font-semibold z-20 lg1:pt-5 lg1:pr-72">
          Cato Networks provides full-fledged telecommunication data services to
          any client in the African continent. Our expertise and agility allow
          us to deliver efficient and tailor-made solutions.
        </p>
        <p className="font-semibold z-20 lg1:pr-72">
          We operate 5 nodes across Africa, through which we deliver services
          with ease whether across challenging rural areas and developing
          markets or big cities and mature markets. Regardless of conditions,
          our service will always be guaranteed for reliability.
        </p>
      </div>
    </div>
  );
};

export default midnav;
