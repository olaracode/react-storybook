import React, { lazy } from "react";
import { Loadable } from "@/components/atoms";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const AppWraper = Loadable(lazy(() => import("./AppWraper")));
const BlogDetails = Loadable(lazy(() => import("@/pages/blogs/BlogDetails")));
const NotFound = Loadable(lazy(() => import("@/pages/404/NotFound")));
const Home = Loadable(lazy(() => import("@/pages/home/Home")));
const routes = createBrowserRouter([
  {
    element: <AppWraper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs/:slug",
        element: <BlogDetails />,
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
