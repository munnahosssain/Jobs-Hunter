import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities";
import { Link, useLoaderData } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";

const JobApply = () => {
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

  return (
    <div>
      {jobData.map(job => (
        <div key={job.id} className="mt-20 flex items-center lg:mx-48">
          <figure>
            <img src={job.companyLogo} alt="company logo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{job.title}</h2>
            <p>{job.company}</p>
            <div className="card-actions ">
              <div className="border px-2 badge-outline">{job.fullTime}</div>
              <div className="border px-2 badge-outline">{job.partTime}</div>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center mr-6">
                <GoLocation />
                {job.location}
              </div>
              <p className="flex items-center">
                <TbCurrencyTaka />
                {job.salary}
              </p>
            </div>
          </div>

          <Link to="">
            <button className="btn py-0 bg-[#7E90FE] border-none">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobApply;
