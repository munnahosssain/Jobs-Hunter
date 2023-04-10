import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CareerContext } from "../Home/Home";

const JobDetails = () => {
  const data = useContext(CareerContext);
  console.log(data);
  return (
    <div>
      <h1>{data.length}</h1>
      <p>{data}</p>
    </div>
  );
};

export default JobDetails;
