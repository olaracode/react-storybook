import React from "react";
import { Box, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export type CommentsT = {
  content: string;
  username: string;
};

const Comments = ({ content, username }: CommentsT) => {
  return (
    <Box>
      <Typography
        sx={{
          borderBottom: "2px solid",
          borderColor: blue[600],
          mb: 1,
          fontSize: 18,
        }}
      >
        {username}
      </Typography>
      <Typography>{content}</Typography>
      <Box display="flex" justifyContent="end">
        <Typography fontSize={14} sx={{ textDecoration: "underline" }}>
          Reply
        </Typography>
      </Box>
    </Box>
  );
};

export default Comments;
