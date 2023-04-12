import React from "react";
import { GoLocation } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const JobApply = ({ job }) => {
  const {
    id,
    title,
    companyLogo,
    company,
    fullTime,
    partTime,
    jobType,
    location,
    salary,
  } = job;
  return (
    <div className="flex items-center lg:mx-96">
      <figure className="h-56 w-60 flex items-center justify-center bg-base-200 mt-6">
        <img src={companyLogo} alt="company logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{company}</p>
        <div className="card-actions ">
          <div className="border px-2 badge-outline">{jobType}</div>
          <div className="border px-2 badge-outline">{fullTime}</div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center mr-6">
            <GoLocation />
            {location}
          </div>
          <p className="flex items-center">
            <TbCurrencyTaka />
            {salary}
          </p>
        </div>
      </div>
      <Link to={`/job-details/${id}`}>
        <button className="btn py-0 bg-[#7E90FE] border-none">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobApply;
