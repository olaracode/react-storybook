import React from "react";
import { useParams } from "react-router-dom";
import { BlogsSkeleton, Blog } from "@/components/molecules";
import { Container } from "@mui/material";
import { useBlogs } from "@/hooks";
const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { fetchBlogBySlug, blogs, currentBlog, detailFetch } = useBlogs();
  React.useEffect(() => {
    if (!slug || !blogs) return;
    fetchBlogBySlug(slug);
  }, [slug]);
  if (detailFetch.loading) return <BlogsSkeleton variant="blog" />;
  return (
    <Container>
      <Blog {...currentBlog} isPreview={false} />
    </Container>
  );
};

export default BlogDetails;
