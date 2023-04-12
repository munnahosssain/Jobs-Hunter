import "./index.css";
import App from "./App";
import React from "react";
import Blog from "./Pages/Blog/Blog";
import ReactDOM from "react-dom/client";
import JobApply from "./Pages/JobsApply/JobsApply";
import Statistics from "./Pages/Statistics/statistics";
import Home from "./Pages/Home/Home/Home";
import JobDetails from "./Pages/Home/JobDetails/JobDetails";
import Error from "./Pages/Shared/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-job",
        element: <JobApply />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
