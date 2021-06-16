import React from "react";
import Smart from "../images/catoimage.jpeg";
import { TiTick } from "react-icons/ti";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";

const Homefibre = () => {
  return (
    <div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10">
        <div>
          <img src={Smart} alt="smart" />
        </div>
        <div className="mt-16 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">Tuko tayari na</p>
          <p className="text-5xl font-bold">Cato smart home</p>
          <p className="text-5xl font-bold">Fibre</p>
          <p>An amazing experience awaits you right at home.</p>
        </div>
      </div>
      <div className="text-center lg1:mt-20">
        <p className="text-4xl font-bold">Home Fibre packages</p>
      </div>
      <div className="lg1:mt-10 lg1:mx-10 lg1:grid lg1:grid-cols-4 lg1:gap-4">
        <div className="border-2 bg-green-200">
          <div className="text-center p-4 bg-green-500">
            <p className="text-2xl">Bronze</p>
          </div>
          <div className="flex justify-center items-center mt-5 mb-5">
            <p className="text-5xl">10</p>
            <p>mbps</p>
          </div>
          <div className="border-b-2">
            <ul className="lg1:ml-4 lg1:space-y-2 lg1:p-4">
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Fast web browsing</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Movies & music streaming</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Live tv</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Multi device streaming</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Home automation</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>No data caps </span>
              </li>
            </ul>
          </div>
          <div className="text-center p-4">
            <p>
              Kshs <span className="font-bold text-xl">2,650</span>{" "}
            </p>
            <p>for 30 days</p>
          </div>
        </div>
        <div className="border-2 bg-green-200">
          <div className="text-center p-4 bg-green-500">
            <p className="text-2xl">Silver</p>
          </div>
          <div className="flex justify-center items-center mt-5 mb-5">
            <p className="text-5xl">25</p>
            <p>mbps</p>
          </div>
          <div className="border-b-2">
            <ul className="lg1:ml-4 lg1:space-y-2 lg1:p-4">
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Fast web browsing</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Movies & music streaming</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Live tv</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Multi device streaming</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Home automation</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>No data caps </span>
              </li>
            </ul>
          </div>
          <div className="text-center p-4">
            <p>
              Kshs <span className="font-bold text-xl">4,500</span>{" "}
            </p>
            <p>for 30 days</p>
          </div>
        </div>
        <div className="border-2 bg-green-200">
          <div className="text-center p-4 bg-green-500">
            <p className="text-2xl">Gold</p>
          </div>
          <div className="flex justify-center items-center mt-5 mb-5">
            <p className="text-5xl">45</p>
            <p>mbps</p>
          </div>
          <div className="border-b-2">
            <ul className="lg1:ml-4 lg1:space-y-2 lg1:p-4">
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Fast web browsing</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Movies & music streaming</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Live tv</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Multi device streaming</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Home automation</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>No data caps </span>
              </li>
            </ul>
          </div>
          <div className="text-center p-4">
            <p>
              Kshs <span className="font-bold text-xl">11,500</span>{" "}
            </p>
            <p>for 30 days</p>
          </div>
        </div>
        <div className="border-2 bg-green-200">
          <div className="text-center p-4 bg-green-500">
            <p className="text-2xl">Saphirre</p>
          </div>
          <div className="flex justify-center items-center mt-5 mb-5">
            <p className="text-5xl">100</p>
            <p>mbps</p>
          </div>
          <div className="border-b-2">
            <ul className="lg1:ml-4 lg1:space-y-2 lg1:p-4">
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Fast web browsing</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Movies & music streaming</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Live tv</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Multi device streaming</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>Home automation</span>
              </li>
              <li className="flex items-center space-x-1">
                <TiTick />
                <span>No data caps </span>
              </li>
            </ul>
          </div>
          <div className="text-center p-4">
            <p>
              Kshs <span className="font-bold text-xl">25,000</span>{" "}
            </p>
            <p>for 30 days</p>
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
    </div>
  );
};

export default Homefibre;
