import React from "react";
import useAxios from "./useAxios";
import { useSelector, useDispatch } from "react-redux";
import {
  setBlogs,
  setLoading,
  setError,
  setDetailFetchLoading,
  setBlogContent,
  setCurrentBlog,
} from "../store/slices/blogSlice";
export type BlogT = {
  slug: string;
  title: string;
  tags: string[];
  _id: string;
  content?: string;
};

const useBlogs = () => {
  const { get } = useAxios();
  const { blogs, loading, error, fulfilled, currentBlog, detailFetch } =
    useSelector((state: any) => state.blog);

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
    dispatch(setDetailFetchLoading(true));
    const findBlog = blogs.find((blog: BlogT) => blog.slug === slug);
    if (findBlog && findBlog.content) {
      dispatch(setCurrentBlog(findBlog));
      dispatch(setDetailFetchLoading(false));
      return;
    }
    try {
      const response = await get(`/blogs/${slug}`);
      dispatch(setBlogContent({ content: response.data.content, slug: slug }));
      dispatch(setDetailFetchLoading(false));
      return response.data;
    } catch (error: any) {
      console.log(error);
      dispatch(setDetailFetchLoading(false));
    }
  };
  React.useEffect(() => {
    if (fulfilled) return;
    if (loading) return;
    fetchBlogs();
  }, []);
  return { blogs, fetchBlogBySlug, loading, error, currentBlog, detailFetch };
};

export default useBlogs;
