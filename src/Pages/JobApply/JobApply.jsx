import React from "react";
import { GoLocation } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";

const JobApply = ({ job, handleBack }) => {
  const { title, companyLogo, company, fullTime, partTime, location, salary } =
    job;
  return (
    <div className="flex items-center lg:mx-96">
      <figure className="h-56 w-60 flex items-center justify-center bg-base-200 mt-6">
        <img src={companyLogo} alt="company logo" />
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
            <GoLocation />
            {location}
          </div>
          <p className="flex items-center">
            <TbCurrencyTaka />
            {salary}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleBack()}
        className="btn py-0 bg-[#7E90FE] border-none"
      >
        View Details
      </button>
    </div>
  );
};

export default JobApply;
