import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities";
import { useLoaderData, useNavigate } from "react-router-dom";
import JobApply from "../JobApply/JobApply";
import imgCover from "../../assets/All Images/Vector.png";

const JobsApply = () => {
  const navigation = useNavigate();
  const jobs = useLoaderData();
  // const [jobData, setJobData] = useState([]);
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
    // setJobData(newJob);
    setFilterList(newJob);
  }, [jobs]);

  const handleBack = () => {
    navigation(-1);
  };

  const handleFilter = value => {
    setFilterList(jobs.filter(job => job.jobType == value));
  };

  return (
    <div>
      <div
        className="my-24"
        style={{
          backgroundImage: `url("../../assets/All Images/Vector.png")`,
        }}
      >
        <div>
          <h1 className="text-center font-bold text-5xl">Job Details</h1>
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
        <JobApply key={job.id} job={job} handleBack={handleBack} />
      ))}
    </div>
  );
};

export default JobsApply;
