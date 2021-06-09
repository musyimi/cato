import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <div>
      <ul className="flex text-gray-50 xs:absolute xs:flex-col xs:right-0 xs:top-16 xs:w-full xs:bg-green-500 xs:z-20  xs:p-2 xs:space-y-4 lg1:grid lg1:grid-cols-11 lg1:relative lg1:top-0 lg1:gap-1 lg1:space-y-0 lg1:ml-12 lg1:font-thin ">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/experience">
            Experience
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/services">
            Services
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/casestudies">
            Case studies
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/resources">
            Resources
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/partners">
            Partners
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/smartfibre">
            Smart Fibre
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/clientportal">
            Client Portal
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/products">
            Products
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <NavLink exact to="/contactus">
            Contact Us
          </NavLink>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}></li>
      </ul>
    </div>
  );
};

export default NavLinks;
