import React from "react";
import { CommentsT } from "./Comments";
import { Box, Typography } from "@mui/material";
const Reply = ({ content, username }: CommentsT) => {
  return (
    <Box>
      <Typography fontSize={18}>{username}</Typography>
      <Typography>{content}</Typography>
    </Box>
  );
};

export default Reply;
