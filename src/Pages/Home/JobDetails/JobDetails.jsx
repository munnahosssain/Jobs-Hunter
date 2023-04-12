import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { TbCurrencyTaka, TbPhone } from "react-icons/tb";
import { TfiBag, TfiEmail } from "react-icons/tfi";
import { addToDb } from "../../../utilities";

const JobDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { location, title, info } = details;

  useEffect(() => {
    fetch("/jobs.json")
      .then(res => res.json())
      .then(data => setDetails(data.find(dt => dt.id === id)));
  }, []);

  const handleApply = id => {
    addToDb(id);
  };

  return (
    <div>
      <div>
        <h1 className="my-24 text-center font-bold text-5xl">Job Details</h1>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-96 bg-green-50">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">Job Details</h2>
              <div className="flex w-96">
                <p className="flex items-center">
                  <TbCurrencyTaka size={20} />{" "}
                  <span className="mr-2 font-bold">Salary: </span> {location}
                </p>
              </div>
              <p className="flex items-center">
                <TfiBag /> <span className="mx-2 font-bold">Job Title:</span>
                {title}
              </p>
              <h2 className="card-title text-2xl font-bold my-3">
                Contact Information
              </h2>
              <div className="flex w-96">
                <p className="flex items-center">
                  <TbPhone size={20} />{" "}
                  <span className="mx-2 font-bold">Phone: </span> {info?.phone}
                </p>
              </div>
              <p className="flex items-center">
                <TfiEmail /> <span className="mx-2 font-bold">Email:</span>
                {info?.email}
              </p>
              <p className="flex items-center">
                <GoLocation /> <span className="mx-2 font-bold">Address:</span>
                {location}
              </p>
            </div>
            <button
              onClick={() => handleApply(id)}
              className="btn bg-[#7E90FE] border-none w-full"
            >
              Apply Now
            </button>
          </div>
          <div>
            <h1 className="text-xl">
              <span className="text-xl font-bold">Job Description: </span>
              {details.description}
            </h1>
            <h1 className="my-6 text-xl">
              <span className="text-xl font-bold">Job Responsibility: </span>
              {details.jobResponsibility}
            </h1>
            <h1 className="text-xl">
              <span className=" text-xl font-bold">
                Educational Requirements:{" "}
              </span>
              <br />
              {details.eduReq}
            </h1>
            <h1 className="text-xl my-4">
              <span className=" text-xl font-bold mb-5">Experiences: </span>
              <br />
              {details.experience}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
