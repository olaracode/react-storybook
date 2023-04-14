import { Suspense } from "react";
import { useRelated } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { RelatedBlogs } from "@/components/organism";
import { CircularProgress } from "@mui/material";

const Related = () => {
  const { related } = useRelated();
  const navigate = useNavigate();
  const handleNavigate = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };
  if (!related) return null;
  return (
    <Suspense fallback={<CircularProgress />}>
      <RelatedBlogs related={related} navigation={handleNavigate} />
    </Suspense>
  );
};

export default Related;
