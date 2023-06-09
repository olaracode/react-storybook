import React, { lazy } from "react";
import { Loadable } from "@/components/atoms";
import { CircularProgress } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const AppWraper = Loadable(lazy(() => import("./AppWraper")));
const BlogDetails = Loadable(lazy(() => import("@/pages/blogs/BlogDetails")));
const NotFound = Loadable(lazy(() => import("@/pages/404/NotFound")));
const Home = Loadable(lazy(() => import("@/pages/home/Home")));
const Login = Loadable(lazy(() => import("@/pages/auth/login/Login")));
const routes = createBrowserRouter(
  [
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
          path: "/auth",
          children: [
            {
              path: "/auth/login",
              element: <Login />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);
const RoutesProvider = () => {
  return (
    <RouterProvider router={routes} fallbackElement={<CircularProgress />} />
  );
};

export default RoutesProvider;
