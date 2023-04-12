import React from "react";
import { Stack, Container, Typography, Chip } from "@mui/material";
import MarkdownPost from "../../atoms/MarkdownPost/MarkdownPost";
export type BlogT = {
  title: string;
  content: string;
  isPreview?: boolean;
  tags: string[];
};

export const defaultPost = "# heading 1";

const Blog = ({
  title,
  content = defaultPost,
  tags,
  isPreview = true,
}: BlogT) => {
  return (
    <Container>
      {isPreview && <Typography variant="h3">{title}</Typography>}
      <Stack direction="row" spacing={1} my={1} justifyContent={"end"}>
        {tags.map((tag) => (
          <Chip key={tag} color="primary" label={tag} />
        ))}
      </Stack>
      {!isPreview && <MarkdownPost content={content} />}
    </Container>
  );
};

export default Blog;
