import Job from "../Job/Job";
import { CareerContext } from "../Home/Home";
import React, { useContext, useState } from "react";

const Featured = () => {
  const jobs = useContext(CareerContext);
  const [seeMore, setSeeMore] = useState(4);

  const displayedJobs = jobs.slice(0, seeMore);
  const handleSeeMore = () => {
    setSeeMore(seeMore + 4);
  };

  return (
    <div className="my-12 lg:mx-48">
      <h1 className="text-center text-5xl font-semibold">Featured Jobs</h1>
      <p className="text-center m-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-4 lg:grid-cols-2 justify-center">
        {displayedJobs.map(job => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center my-12">
        {seeMore < jobs.length && (
          <button
            onClick={handleSeeMore}
            className="btn bg-[#7E90FE] border-none btn-wide"
          >
            See more
          </button>
        )}
      </div>
    </div>
  );
};

export default Featured;
