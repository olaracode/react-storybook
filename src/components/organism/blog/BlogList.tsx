import React from "react";
import { Stack, Divider } from "@mui/material";
import { BlogT } from "@/hooks/useBlogs";
import { Blog } from "@/components/molecules";

const BlogList = ({ blogs }: { blogs: BlogT[] }) => {
  return (
    <Stack spacing={2} divider={<Divider variant="middle" />}>
      {blogs.map((blog) => (
        <Blog key={blog._id} {...blog} />
      ))}
    </Stack>
  );
};

export default BlogList;
