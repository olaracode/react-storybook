import React from "react";
import { CommentsT } from "@/components/atoms/comments/Comments";
// Create a component that receives a list of replies, maps then and at the end add a load more replies, if the next page is not null

import { Comments } from "@/components/atoms";
import { Stack, Divider, Typography } from "@mui/material";
type commentListT = {
  comments: CommentsT[];
  nextPage: string | null;
};

const CommentList = ({ comments, nextPage }: commentListT) => {
  return (
    <>
      <Stack p={3} spacing={1.5} divider={<Divider />}>
        {comments.map((comment) => (
          <Comments.Reply key={comment.username} {...comment} />
        ))}
        {nextPage && <Typography fontSize={12}>Load more</Typography>}
      </Stack>
    </>
  );
};

export default CommentList;
