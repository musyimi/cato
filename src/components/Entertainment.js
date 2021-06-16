import React from "react";
import Satelite from "../images/satelite.jpg";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";
import Copyright from "../components/Copyright";

const Entertainment = () => {
  return (
    <div>
      <div className="lg1:grid lg1:grid-cols-2 lg1:mt-10">
        <div>
          <img src={Satelite} alt="smart" />
        </div>
        <div className="mt-16 p-4 space-y-2 ml-10">
          <p className="text-5xl font-bold">Entertainment galore</p>

          <p>
            Stay connected to your friends and family, catch up on your latest
            e-mails or listen to your favourite playlists and blockbuster
            movies.
          </p>
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

export default Entertainment;
