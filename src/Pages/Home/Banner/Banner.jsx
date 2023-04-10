import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-2 bg-blue-50">
      <div className="lg:my-32">
        <h1 className="text-7xl font-semibold">
          One Step <br /> Closer To Your <br />
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p className="my-5">
          Explore thousands of job opportunities with all the information <br />{" "}
          you need. Its your future. Come find it. Manage <br /> all your job
          application from start to finish.
        </p>
        <Link to="/apply-jobs" className="btn bg-[#7E90FE] border-none">
          Star Applying
        </Link>
      </div>
      <div>
        <img className="mb-auto" src={banner} alt="Employ image" />
      </div>
    </div>
  );
};

export default Banner;
