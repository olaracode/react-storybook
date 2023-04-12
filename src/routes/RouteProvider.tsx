import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/layout/Layout";
const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
const RoutesProvider = () => {
  return <RouterProvider router={routes} />;
};

export default RoutesProvider;
