import React, { createContext } from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import Featured from "../Featured/Featured";
import { useLoaderData } from "react-router-dom";

export const CareerContext = createContext("dataShowing");

const Home = () => {
  const featuredData = useLoaderData();
  return (
    <div className="px-2">
      <CareerContext.Provider value={[featuredData]}>
        <Banner />
        <CategoryList />
        <Featured />
      </CareerContext.Provider>
    </div>
  );
};

export default Home;
