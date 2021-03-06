import React from "react";
import Bottom from "./Bottom";

const State = () => {
  return (
    <div className=" text-gray-900 ">
      <div className="lg1:px-20">
        <div className="bg-gray-200">
          <div className="xs:mx-2 xs:pt-8">
            <p className="flex font-extralight xs:justify-center xs:text-3xl lg1:text-6xl lg1:pt-10 lg1:pb-5">
              State of the Art Connectivity
            </p>
          </div>
          <div className="xs:mx-2 xs:mt-2">
            <p className="font-semibold text-center">
              We operate in more than 45 countries with branches in Africa. Our
              clients work in several industries and we strive to offer the best
              solutions for every need. As part of our commitment to excellence
              we also offer 24/7 multilingual support.
            </p>
          </div>
          <div className="xs:mt-5">
            <div className="sm1:grid sm1:grid-cols-3 sm1:grid-rows-2">
              <div className="space-y-3 p-2">
                <div className="flex xs:justify-center">
                  <span className="text-5xl font-thin">5</span>
                </div>
                <div className="flex xs:justify-center text-3xl font-thin">
                  <span>Nodes</span>
                </div>
                <div className="flex xs:justify-center font-thin">
                  <span>Deployed across the whole African continent.</span>
                </div>
              </div>
              <div className="space-y-3 p-2">
                <div className="flex xs:justify-center">
                  <span className="text-5xl font-thin">+45</span>
                </div>
                <div className="flex xs:justify-center text-3xl font-thin">
                  <span>Countries</span>
                </div>
                <div className="flex xs:justify-center font-thin">
                  <span className="text-center">
                    We provide full fledged and tailor-made solutions in over 45
                    countries.
                  </span>
                </div>
              </div>
              <div className="space-y-3 p-2">
                <div className="flex xs:justify-center">
                  <span className="text-5xl font-thin">+16</span>
                </div>
                <div className="flex xs:justify-center text-3xl font-thin">
                  <span>Industries</span>
                </div>
                <div className="flex xs:justify-center font-thin">
                  <span>in which Cato Networks has specialized servicing.</span>
                </div>
              </div>
              <div className="space-y-3 p-2">
                <div className="flex xs:justify-center">
                  <span className="text-5xl font-thin">7</span>
                </div>
                <div className="flex xs:justify-center text-3xl font-thin">
                  <span>Global Centers</span>
                </div>
                <div className="flex xs:justify-center font-thin">
                  <span>Branches in Kenya,Uganda,Tanzania</span>
                </div>
              </div>
              <div className="space-y-3 p-2">
                <div className="flex xs:justify-center">
                  <span className="text-5xl font-thin">+20</span>
                </div>
                <div className="flex xs:justify-center text-3xl font-thin">
                  <span>Years of Experience</span>
                </div>
                <div className="flex xs:justify-center font-thin">
                  <span className="text-center">
                    Years of experience in the telecommunication market
                  </span>
                </div>
              </div>
            </div>

            <div className="xs:mt-4 xs:space-y-4">
              <div className="flex xs:justify-center lg1:text-2xl lg1:pt-32">
                <p>INDUSTRIES WE SERVE</p>
              </div>
              <div className="xs:mx-2">
                <p className="text-center lg1:pb-10 lg1:px-20">
                  Aeronautics - Banking - Commerce - Engineering - Construction
                  - Steel - Mining - Oil and Gas - Government - Multinational
                  Tech Companies - Global Food Industry - Chemical -
                  Agrochemical - Healthcare - Wood Pulp Industry - Consumer
                  Goods Corporations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
};

export default State;
