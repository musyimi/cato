import Navlinks from "./Navlinks";
import React from "react";
import { CgMenu } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const Hamburger = (
    <span className="absolute right-2 cursor-pointer">
      <CgMenu className="text-2xl" onClick={() => setOpen(!open)} />
    </span>
  );

  const Close = (
    <span className="absolute right-2 cursor-pointer">
      <FaTimes className="text-2xl" onClick={() => setOpen(!open)} />
    </span>
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="flex items-center">
      {open ? Close : Hamburger}

      {open && <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
};

export default MobileNavigation;
