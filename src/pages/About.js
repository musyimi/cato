import React from "react";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";
import Us from "../images/aboutus.jpg";

const About = () => {
  return (
    <div className="relative">
      <div>
        <img className=" h-96 w-full object-cover" src={Us} alt="about us" />
      </div>
      <div>
        <p className="xs:p-2 absolute lg1:top-24 lg1:text-center lg1:text-3xl lg1:font-thin lg1:mx-10 text-gray-50">
          We are a pioneer digital champion, always been focused on innovation
          and evolution, thinking about future to make it, to stay ahead as a
          truly meaningful and purposeful organization. We offer variety of ICT
          solutions and digital services in several categories including
          telecommunication, IT, financial technology, digital media,
          cybersecurity, and other advanced digital solutions, with that we are
          leading the digital transformation nationally and regionally.
        </p>
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

export default About;
