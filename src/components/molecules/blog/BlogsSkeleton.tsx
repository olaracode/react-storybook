import React, { lazy, Suspense } from "react";
import { Loading } from "@/components/atoms/loadable/Loadable";
import { Container } from "@mui/material";
export type BlogsSkeletonProps = {
  variant?: "home" | "blog";
  isPreview?: boolean;
};

const BlogsSkeleton = ({
  variant = "home",
  isPreview = false,
}: BlogsSkeletonProps) => {
  const LazyComponent =
    variant === "blog"
      ? lazy(() => import("@/components/atoms/blog/BlogSkeleton"))
      : lazy(() => import("@/components/molecules/blog/HomeLoader"));

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <LazyComponent isPreview={isPreview} />
      </Container>
    </Suspense>
  );
};

export default BlogsSkeleton;
