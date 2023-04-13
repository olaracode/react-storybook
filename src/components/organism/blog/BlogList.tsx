import React from "react";
import { Stack, Divider, Container } from "@mui/material";
import { BlogT } from "@/hooks/blogs/useBlogList";
import { Blog } from "@/components/molecules";

const BlogList = ({
  blogs,
  navigation,
}: {
  blogs: BlogT[];
  navigation?: (slug: string) => void;
}) => {
  return (
    <Container>
      <Stack spacing={2} divider={<Divider variant="middle" />}>
        {blogs.map((blog) => (
          <Blog key={blog._id} {...blog} navigation={navigation} />
        ))}
      </Stack>
    </Container>
  );
};

export default BlogList;
