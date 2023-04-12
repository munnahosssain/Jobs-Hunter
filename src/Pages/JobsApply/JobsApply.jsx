import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities";
import { useLoaderData, useNavigate } from "react-router-dom";
import JobApply from "../JobApply/JobApply";
import imgCover from "../../assets/All Images/Vector.png";

const JobsApply = () => {
  const jobs = useLoaderData();
  const [jobData, setJobData] = useState([]);

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
  }, [jobs]);

  const navigation = useNavigate();
  const handleBack = () => {
    navigation(-1);
  };

  // handleFilterChange;

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
        <select
          // onChange={handleFilterChange}
          className="select w-36 border-node"
        >
          <option disabled selected>
            Filter By
          </option>
          <option>Remote Job</option>
          <option>On Side</option>
        </select>
      </div>
      {jobData.map(job => (
        <JobApply key={job.id} job={job} handleBack={handleBack} />
      ))}
    </div>
  );
};

export default JobsApply;
