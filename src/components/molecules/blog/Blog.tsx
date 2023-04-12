import React from "react";
import { Stack, Container, Typography, Chip } from "@mui/material";
import { BlogT } from "@/hooks/useBlogs";
import { MarkdownPost } from "@/components/atoms";

// Extend BlogT with isPreview
type BlogTProps = BlogT & {
  isPreview?: boolean;
  navigation: (route: string) => void;
};

export const defaultPost = "# heading 1";

const Blog = ({
  title,
  content = defaultPost,
  tags,
  slug,
  navigation = (route: string) => console.log(route),
  isPreview = true,
}: BlogTProps) => {
  return (
    <Container>
      {isPreview && (
        <Typography variant="h3" onClick={() => navigation(slug)}>
          {title}
        </Typography>
      )}
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
