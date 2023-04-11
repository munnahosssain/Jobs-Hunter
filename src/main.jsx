import React from "react";
import "./index.css";
import App from "./App";
import Blog from "./Pages/Blog/Blog";
import ReactDOM from "react-dom/client";
import JobApply from "./Pages/JobApply/JobApply";
import Statistics from "./Pages/Statistics/statistics";
import Home from "./Pages/Home/Home/Home";
import JobDetails from "./Pages/Home/JobDetails/JobDetails";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      {
        path: "*",
        element: (
          <div>
            <Link to="/">go to homepage</Link>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
