import React from "react";
import { useSelector, useDispatch } from "react-redux";

export type BlogT = {
  slug: string;
  title: string;
  tags: string[];
  _id: string;
  content?: string;
};

type BlogList = {
  blogs: BlogT[];
  loading: boolean;
  error: boolean;
  fulfilled: boolean;
};

const useBlogList = (): BlogList => {
  const { blogs, loading, error, fulfilled } = useSelector(
    (state: any) => state.blog
  );
  const dispatch = useDispatch();
  const fetchBlogs = async () => {
    const { get } = await import("../useAxios");
    const { setBlogs, setLoading, setError } = await import(
      "../../store/slices/blogSlice"
    );
    try {
      dispatch(setLoading(true));
      const response = await get("/blogs/");
      dispatch(setBlogs(response.data));
    } catch (error: any) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
  React.useEffect(() => {
    if (fulfilled) return;
    if (loading) return;
    fetchBlogs();
  }, [fulfilled, loading]);
  return { blogs, loading, error, fulfilled };
};

export default useBlogList;
