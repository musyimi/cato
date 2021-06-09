import React from "react";
import Hero from "../components/Hero";
import Management from "../components/Management";
import Knowhow from "../components/Knowhow";
import Work from "../components/Work";
import State from "../components/State";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Home = () => {
  return (
    <div>
      <Hero />
      <Management />
      <Knowhow />
      <Work />
      <State />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
