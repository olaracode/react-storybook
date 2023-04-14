import React from "react";
import { useParams } from "react-router-dom";
import { BlogT } from "./useBlogList";

type relatedT = BlogT[] | [];

const useRelated = () => {
  const { slug } = useParams<{ slug: string }>();
  const [related, setRelated] = React.useState<relatedT>();
  const getRelatedBlogs = React.useCallback(async (slug: string) => {
    const { get } = await import("../useAxios");
    try {
      const response = await get(`/blogs/related/${slug}`);
      setRelated(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  React.useEffect(() => {
    if (!slug) return;
    getRelatedBlogs(slug);
  }, [slug]);
  return { related };
};

export default useRelated;
