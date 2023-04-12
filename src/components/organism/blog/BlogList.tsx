import React from "react";
import { Stack, Divider } from "@mui/material";
import Blog, { BlogT } from "../../molecules/blogs/Blog";
const BlogList = ({ blogs }: { blogs: BlogT[] }) => {
  return (
    <Stack spacing={2} divider={<Divider variant="middle" />}>
      {blogs.map((blog) => (
        <Blog key={blog.title} {...blog} />
      ))}
    </Stack>
  );
};

export default BlogList;
