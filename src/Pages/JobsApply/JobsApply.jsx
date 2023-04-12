import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities";
import { useLoaderData, useNavigate } from "react-router-dom";
import JobApply from "../JobApply/JobApply";
import imgCover from "../../assets/All Images/Vector.png";

const jobId = [
  { id: 1, title: "Job A", onTime: true, remote: true },
  { id: 2, title: "Job B", onTime: false, remote: true },
  { id: 3, title: "Job C", onTime: true, remote: false },
  { id: 4, title: "Job D", onTime: false, remote: false },
];

const JobsApply = () => {
  const navigation = useNavigate();
  const jobs = useLoaderData();
  const [jobData, setJobData] = useState([]);
  const [filterList, setFilterList] = useState();

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
          <option disabled>Filter By</option>
          <option value="Remote Job">Remote Job</option>
          <option value="On Side">On Side</option>
        </select>
      </div>
      {jobData.map(job => (
        <JobApply key={job.id} job={job} handleBack={handleBack} />
      ))}
    </div>
  );
};

export default JobsApply;
