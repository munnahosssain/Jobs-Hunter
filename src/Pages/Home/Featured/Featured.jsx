import React, { useContext } from "react";
import Job from "../Job/Job";
import { CareerContext, idContext } from "../Home/Home";

const Featured = () => {
  const jobs = useContext(CareerContext);

  return (
    <div className="my-12">
      <button onClick={() => setI(i + 1)}>increase</button>
      <h1 className="text-center text-5xl font-semibold">Featured Jobs</h1>
      <p className="text-center m-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-4 lg:grid-cols-2 justify-center">
        {jobs.map(job => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
