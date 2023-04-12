import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../components/layout/Layout";
import { StoreProvider } from "../store/StoreProvider";
import AppWraper from "./AppWraper";

const routes = createBrowserRouter([
  {
    element: <AppWraper />,
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
