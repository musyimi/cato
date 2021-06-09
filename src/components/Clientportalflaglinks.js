import React from "react";
import { Link } from "react-router-dom";
import Flag from "react-world-flags";

const Clientportalflaglinks = () => {
  return (
    <div>
      <div>
        <ul className="lg1:grid lg1:grid-cols-7 lg1:gap-2 lg1:pt-10">
          <li>
            <Link className="text-xs" to="/country">
              <Flag code={404} />
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/country">
              <Flag code={800} />
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/country">
              <Flag code={834} />
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/country">
              <Flag className="object-cover" code={108} />
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/country">
              <Flag code={646} />
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/country">
              <Flag code={728} />
            </Link>
          </li>
          <li>
            <Link className="text-xs" to="/country">
              <Flag code={180} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Clientportalflaglinks;
