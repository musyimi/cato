import { Link } from "react-router-dom";

const ServiceLinks = () => {
  return (
    <div className="mx-20">
      <div className="xs:bg-green-400 xs:p-2 xs:space-y-5 sm1:bg-gray-50 sm1:space-y-0 sm1:grid sm1:grid-cols-3 sm1:gap-6 sm1:mt-10 sm1:mb-10">
        <Link to="/dedicated">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">
              Dedicated internet access
            </p>
          </div>
        </Link>
        <Link to="/ethernet">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">Ethernet access</p>
          </div>
        </Link>
        <Link to="/vpn">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">Edge SD-WAN</p>
          </div>
        </Link>
        <Link to="/broadband">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">
              Broadband internet access
            </p>
          </div>
        </Link>
        <Link to="/dedicated">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">
              Dedicated cloud connection
            </p>
          </div>
        </Link>
        <Link to="/hybrid">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">
              Hybrid dynamic networks
            </p>
          </div>
        </Link>
        <Link to="/wildix">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">Wildix</p>
          </div>
        </Link>
        <Link to="/customer">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">
              Customer premises equipment
            </p>
          </div>
        </Link>
        <Link to="/field">
          <div className="sm1:border-2 sm1:border-green-200 sm1:p-10 sm1:rounded lg1:h-60 lg1:bg-green-300 lg1:text-xl">
            <p className="text-center font-serif lg1:mt-16 ">Field service</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceLinks;
