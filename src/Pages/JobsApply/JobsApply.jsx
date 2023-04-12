import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities";
import { useLoaderData } from "react-router-dom";
import JobApply from "../JobApply/JobApply";

const JobsApply = () => {
  const jobs = useLoaderData();
  const [jobData, setJobData] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const newJob = [];
    for (const id in storedCart) {
      const savedCast = jobs.find(job => job.id === id);
      if (savedCast) {
        newJob.push(savedCast);
      }
    }
    setJobData(newJob);
    setFilterList(newJob);
  }, [jobs]);

  const handleFilter = value => {
    setFilterList(jobData.filter(job => job.jobType === value));
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="my-24 text-center font-bold text-5xl">Job Details</h1>
        </div>
      </div>
      <div className="flex justify-end lg:mx-96">
        <select onChange={event => handleFilter(event.target.value)}>
          <option disabled selected>
            Filter By
          </option>
          <option value="Remote">Remote</option>
          <option value="OnTime">OnTime</option>
        </select>
      </div>
      {filterList.map(job => (
        <JobApply key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobsApply;
