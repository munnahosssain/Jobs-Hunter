import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities";
import { useLoaderData, useNavigate } from "react-router-dom";
import JobApply from "../JobApply/JobApply";

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

  return (
    <div>
      {jobData.map(job => (
        <JobApply key={job.id} job={job} handleBack={handleBack} />
      ))}
    </div>
  );
};

export default JobsApply;
