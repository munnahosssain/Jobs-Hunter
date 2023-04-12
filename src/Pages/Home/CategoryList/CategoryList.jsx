import React, { useEffect, useState } from "react";

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("list.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="my-24 lg:mx-48">
      <h1 className="text-center text-5xl font-semibold">Job Category List</h1>
      <p className="text-center m-6">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4 mt-12 ">
        {data.map(data => (
          <div
            key={data.id}
            className="p-6 grid gap-6 card-compact w-96 bg-[7E90FE] shadow-xl"
          >
            <figure>
              <img src={data.logo} alt="Logo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}!</h2>
              <p>{data.jobs} jobs Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
