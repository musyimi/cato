import React from "react";
import { Link } from "react-router-dom";

const Smartfibretop = () => {
  return (
    <div>
      <div>
        <ul className="flex space-x-10 ">
          <li>
            <Link to="/ask">Ask for Fibre</Link>
          </li>
          <li>
            <Link to="/coverage">Coverage</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/getintouch">Get In Touch</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Smartfibretop;
