import React from "react";
import Smart from "../images/catoimage.jpeg";

const Securenet = () => {
  return (
    <div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10">
        <div>
          <img src={Smart} alt="smart" />
        </div>
        <div className="mt-16 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">Cato secure</p>
          <p className="text-5xl font-bold">net</p>

          <p>
            Complete protection of personal data and parental control/manage
            your child's internet usage
          </p>
        </div>
      </div>

      <div className="lg1:mb-10">
        <div className="text-center lg1:mt-16 lg1:space-y-4">
          <p className="font-bold text-4xl">Get ready for whatever's next</p>
          <p className="font-semibold text-3xl">
            Choose the plan that best suits your needs and enjoy your digital
            life with Cato
          </p>
        </div>
        <div className="lg1:mt-20 lg1:mx-20 lg1:grid lg1:grid-cols-4 lg1:gap-4">
          <div className="lg1:border-2 lg1:p-4">
            <p className="lg1:text-xs text-center">Cato home</p>
            <p className="text-green-400 lg1:text-xl lg1:text-center ">
              Essential
            </p>
            <div className="lg1:mt-8">
              <ul className="lg1:space-y-4 lg1:text-sm">
                <li>Protection against viruses</li>
                <li>Wi-Fi protection against hackers</li>
                <li>Virus scan for external devices</li>
              </ul>
            </div>
            <div className="lg1:text-center lg1:mt-32 lg1:space-y-3">
              <div className="bg-green-400 lg1:p-2">
                <p>Kshs 6,600/year</p>
              </div>
              <div className="bg-yellow-400 lg1:p-2">
                <p>Kshs 650/month</p>
              </div>
            </div>
          </div>
          <div className="lg1:border-2 lg1:p-4">
            <p className="lg1:text-xs text-center">Cato home</p>
            <p className="text-green-400 lg1:text-xl lg1:text-center ">
              Advanced
            </p>
            <div className="lg1:mt-8">
              <ul className="lg1:space-y-4 lg1:text-sm">
                <li>Protection against viruses and advanced threats</li>
                <li>Personal data protection</li>
                <li>Parental control: manage your child’s internet use</li>
              </ul>
            </div>
            <div className="lg1:text-center lg1:mt-20 lg1:space-y-3">
              <div className="bg-green-400 lg1:p-2">
                <p>Kshs 9,000/year</p>
              </div>
              <div className="bg-yellow-400 lg1:p-2">
                <p>Kshs 800/month</p>
              </div>
            </div>
          </div>
          <div className="lg1:border-2 lg1:p-4">
            <p className="lg1:text-xs text-center">Cato home</p>
            <p className="text-green-400 lg1:text-xl lg1:text-center ">
              Complete
            </p>
            <div className="lg1:mt-8">
              <ul className="lg1:space-y-4 lg1:text-sm">
                <li>
                  Protection against viruses, advanced threats and cyberattacks
                </li>
                <li>Complete protection of personal data and passwords</li>
                <li>PC optimizer and tuneup</li>
              </ul>
            </div>
            <div className="lg1:text-center lg1:mt-20 lg1:space-y-3">
              <div className="bg-green-400 lg1:p-2">
                <p>Kshs 10,000/year</p>
              </div>
              <div className="bg-yellow-400 lg1:p-2">
                <p>Kshs 1,200/month</p>
              </div>
            </div>
          </div>
          <div className="lg1:border-2 lg1:p-4 lg1:bg-green-200">
            <p className="lg1:text-xs text-center">Cato home</p>
            <p className="text-gray-50 lg1:text-xl lg1:text-center ">Premium</p>
            <div className="lg1:mt-8">
              <ul className="lg1:space-y-4 lg1:text-sm">
                <li>Protection against viruses</li>
                <li>Wi-Fi protection against hackers</li>
                <li>Virus scan for external devices</li>
              </ul>
            </div>
            <div className="lg1:text-center lg1:mt-32 lg1:space-y-3">
              <div className="bg-green-400 lg1:p-2">
                <p>Kshs 15,000/year</p>
              </div>
              <div className="bg-yellow-400 lg1:p-2">
                <p>Kshs 1,500/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Securenet;
