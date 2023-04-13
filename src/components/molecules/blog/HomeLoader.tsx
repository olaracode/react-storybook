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

export default HomeLoader;
