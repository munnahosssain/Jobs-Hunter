import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  const handleViewDetails = id => {
    console.log(id);
  };

  return (
    <div className="my-12">
      <h1 className="text-center text-5xl font-semibold">Featured Jobs</h1>
      <p className="text-center m-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-4 lg:grid-cols-2 justify-center">
        {jobs.map(job => (
          <Job key={job.id} job={job} handleViewDetails={handleViewDetails} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
