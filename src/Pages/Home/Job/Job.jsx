import React from "react";
import { GoLocation } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    companyLogo,
    title,
    company,
    location,
    salary,
    fullTime,
    partTime,
  } = job;

  return (
    <div className="mt-20">
      <figure>
        <img src={companyLogo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{company}</p>
        <div className="card-actions ">
          <div className="border px-2 badge-outline">{fullTime}</div>
          <div className="border px-2 badge-outline">{partTime}</div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center mr-6">
            <GoLocation className="mr-1" />
            {location}
          </div>
          <p className="flex items-center">
            <TbCurrencyTaka />
            {salary}
          </p>
        </div>
      </div>
      <Link to={`job-details/${id}`}>
        <button className="btn py-0 bg-[#7E90FE] border-none">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
