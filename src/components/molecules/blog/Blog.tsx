import React from "react";
import { Stack, Typography, Chip } from "@mui/material";
import { BlogT } from "@/hooks/blogs/useBlogList";
import { MarkdownPost } from "@/components/atoms";
import { blue } from "@mui/material/colors";
// Extend BlogT with isPreview
type BlogTProps = BlogT & {
  isPreview?: boolean;
  navigation?: (route: string) => void;
};

export const defaultPost = "";

const Blog = ({
  title,
  content = defaultPost,
  tags,
  slug,
  navigation = (route: string) => console.log(route),
  isPreview = true,
}: BlogTProps) => {
  // reduce tags to 4 elements
  if (tags && tags.length > 4) {
    tags = tags.slice(0, 4);
  }
  return (
    <>
      {isPreview && (
        <Typography
          variant="h3"
          onClick={() => navigation(slug)}
          sx={{
            ":hover": {
              color: blue[500],
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
        >
          {title}
        </Typography>
      )}
      <Stack
        direction="row"
        flexWrap={"wrap"}
        spacing={1}
        my={1}
        justifyContent={"end"}
      >
        {tags &&
          tags.map((tag) => <Chip key={tag} color="primary" label={tag} />)}
      </Stack>
      {!isPreview && <MarkdownPost content={content} />}
    </>
  );
};

export default Blog;
