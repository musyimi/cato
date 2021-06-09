import { Link } from "react-router-dom";

const ServiceLinks = () => {
  return (
    <div>
      <ul className="xs:bg-green-400 xs:p-2 xs:space-y-5 sm1:bg-gray-50 sm1:space-y-0 sm1:grid sm1:grid-cols-3 sm1:gap-4 sm1:mt-10 sm1:mb-10">
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/dedicated">Dedicated internet access</Link>
        </li>
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/ethernet">Ethernet access</Link>
        </li>
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/vpn">Edge SD-WAN</Link>
        </li>
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/broadband">Broadband internet access</Link>
        </li>
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/dedicated">Dedicated cloud connection</Link>
        </li>
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/hybrid">Hybrid dynamic networks</Link>
        </li>
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/wildix">Wildix</Link>
        </li>
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/customer">Customer premises equipment</Link>
        </li>
        <li className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded-xl">
          <Link to="/field">Field service</Link>
        </li>
      </ul>
    </div>
  );
};

export default ServiceLinks;
