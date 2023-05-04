import React from "react";
import { Container, Skeleton, Stack } from "@mui/material";

export type BlogSkeletonT = {
  isPreview?: boolean;
};
const BlogSkeleton = ({ isPreview = true }: BlogSkeletonT) => {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Stack direction={"row"} gap={2} justifyContent={"end"}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "40px" }}
          width={35}
          height={20}
        />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "40px" }}
          width={35}
          height={20}
        />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: "40px" }}
          width={35}
          height={20}
        />
      </Stack>
      {!isPreview && (
        <>
          <Skeleton variant="rounded" width={"100%"} height={120} />
          <Skeleton variant="rounded" width={"100%"} height={120} />
          <Skeleton variant="rounded" width={"100%"} height={120} />
          <Skeleton variant="rounded" width={"100%"} height={120} />
        </>
      )}
    </Stack>
  );
};

export default BlogSkeleton;
