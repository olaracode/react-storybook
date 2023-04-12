import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Box minHeight={"90vh"}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
