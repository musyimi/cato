import React from "react";
import Bottom from "../components/Bottom";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Case from "../images/case.jpg";
import c1 from "../images/case1.jpg";
import c2 from "../images/case2.jpg";
import c3 from "../images/case3.jpg";
import c4 from "../images/case4.jpg";

const Casestudies = () => {
  return (
    <div>
      <div>
        <div className="relative">
          <img
            className="h-96 w-full object-cover"
            src={Case}
            alt="casestudy"
          />
        </div>
        <div className="absolute xs:top-36 xs:p-2 sm1:ml-8 lg1:top-40 lg1:ml-10">
          <div className="text-gray-50 font-semibold xs:text-xl sm1:text-4xl lg1:text-6xl">
            Case Studies
          </div>
          <div className="text-xs text-gray-50  sm1:text-sm lg1:text-lg">
            We like to share our success stories with our clients. Cato networks
            has worked with world renowned companies and government
            organizations
          </div>
        </div>
      </div>

      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10 ">
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-44 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            A food company with worldwide presence simplified its complex
            telecommunications infrastructure with the help of Cato networks
          </p>
        </div>
        <div>
          <img src={c1} alt="dee1" />
        </div>
        <div>
          <div>
            <img
              className="h-96 w-full object-cover"
              src={c2}
              alt="dedicated 2"
            />
          </div>
        </div>
        <div>
          <p className="xs:p-2 sm1:p-3 sm1:font-light lg1:mt-32 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            An airline required redundant internet access to operate without
            interruptions across different airports. Cato networks was able to
            deliver
          </p>
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-44 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Wind farms are located in remote and hard to access locations. IG
            Networks was able to bring solutions to this renewable energy
            company
          </p>
        </div>

        <div>
          <img src={c3} alt="dedicated3" />
        </div>

        <div>
          <img src={c4} alt="dedicated3" />
        </div>

        <div>
          <p className="xs:p-2 sm1:p-3 lg1:p-0 sm1:font-light lg1:mt-44 lg1:font-semibold lg1:text-2xl lg1:mx-5">
            Cato networks helped Kenyan government bring justice courts to
            isolated regions of the country that had limited infrastructure
          </p>
        </div>
      </div>

      <div>
        <Bottom />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Casestudies;
