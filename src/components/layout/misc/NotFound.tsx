import React from "react";
import Logo from "@/assets/react.svg";
import { Link } from "@/components/atoms";
import { Box, Stack, Typography, styled } from "@mui/material";
const LogoImg = styled("img")({
  width: "150px",
  height: "150px",
  // add rotating animation
  animation: "spin infinite 30s linear",
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

export type NotFoundPropsT = {
  docs?: boolean;
};

const NotFound = ({ docs = false }: NotFoundPropsT) => {
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      justifyContent="center"
      alignItems="center"
      gap={3}
    >
      <Stack>
        <Typography variant="h4">404 Not Found</Typography>
        <Typography>
          Page: <b>{window.location.pathname}</b> doesn't seem to exist
        </Typography>
        <Link to="/" content="Go back to home page" docs={docs} />
      </Stack>
      <LogoImg src={Logo} alt="react-logo" />
    </Box>
  );
};

export default NotFound;
