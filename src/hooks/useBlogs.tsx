import React from "react";
import useAxios from "./useAxios";
import { useSelector, useDispatch } from "react-redux";
import { setBlogs, setLoading, setError } from "../store/slices/blogSlice";
export type BlogT = {
  slug: string;
  title: string;
  tags: string[];
  _id: string;
  content?: string;
};

const useBlogs = () => {
  const { get } = useAxios();
  const { blogs, loading, error, fulfilled } = useSelector(
    (state: any) => state.blog
  );
  const dispatch = useDispatch();
  const fetchBlogs = async () => {
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
  const fetchBlogBySlug = async (slug: string) => {
    try {
      const response = await get(`/blogs/${slug}`);
    } catch (error: any) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    if (fulfilled) return;
    if (loading) return;
    fetchBlogs();
  }, []);
  return { blogs, fetchBlogBySlug, loading, error };
};

export default useBlogs;
