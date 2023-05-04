import React from "react";
import { Container, Typography, Paper, Stack, Divider } from "@mui/material";
import { blue } from "@mui/material/colors";
// Create a text component that wont be longer then 3 lines by default until clicked to expand

type CommentsT = {
  content: string;
  username: string;
  replies?: CommentsT[];
};

const mockComment: CommentsT = {
  username: "Usuario",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore",
  replies: [
    {
      username: "Usuario",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore",
    },
    {
      username: "Usuario",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore",
    },
  ],
};

import { Comments as Comment } from "@/components/atoms";
const Comments = ({ comment = mockComment }: { comment: CommentsT }) => {
  return (
    <Container>
      <Typography>Comentarios</Typography>
      <Paper sx={{ p: 5 }}>
        <Comment.Comment
          content={comment.content}
          username={comment.username}
        />
        <Stack p={3} spacing={1.5} divider={<Divider />}>
          {comment.replies &&
            comment.replies.length > 0 &&
            comment.replies.map((reply) => (
              <Comment.Reply
                content={reply.content}
                username={reply.username}
              />
            ))}
        </Stack>
      </Paper>
    </Container>
  );
};

export default Comments;
