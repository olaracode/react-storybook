import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
const Footer = () => {
  return (
    <Box bgcolor={grey[900]} px={2} py={5} color="white">
      <Typography>ReactDocs Made with React-Mui-Storybook</Typography>
    </Box>
  );
};

export default Footer;
