import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="flex items-center bg-green-500">
          <NavLink exact to="/" className="p-2 text-gray-50">
            <div>
              <span>CATO</span>
            </div>
            <div>
              <span className="text-xs ">NETWORKS</span>
            </div>
          </NavLink>
          <span className="xs:hidden lg1:flex">
            <Navigation />
          </span>
          <span className="xs:flex lg1:hidden">
            <MobileNavigation />
          </span>

          <div></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
