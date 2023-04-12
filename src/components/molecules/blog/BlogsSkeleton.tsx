import React from "react";
import { Stack } from "@mui/material";
import { BlogSkeleton as BaseSkeleton } from "@/components/atoms";
const HomeLoader = () => {
  return (
    <Stack spacing={5}>
      <BaseSkeleton />
      <BaseSkeleton />
      <BaseSkeleton />
    </Stack>
  );
};

const variants = {
  home: <HomeLoader />,
  blog: <BaseSkeleton isPreview={false} />,
};

export type BlogsSkeletonProps = {
  variant?: keyof typeof variants;
};

const BlogsSkeleton = ({ variant }: BlogsSkeletonProps) => {
  return variants[variant || "home"];
};

export default BlogsSkeleton;
