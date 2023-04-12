import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import AppWraper from "./AppWraper";
import NotFound from "@/pages/404/NotFound";
const routes = createBrowserRouter([
  {
    element: <AppWraper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
const RoutesProvider = () => {
  return <RouterProvider router={routes} />;
};

export default RoutesProvider;
