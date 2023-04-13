import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Box minHeight={"90vh"} my={12}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
