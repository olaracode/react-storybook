import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlogT } from "./useBlogList";

const useBlogDetail = () => {
  const { blogs, currentBlog, detailFetch } = useSelector(
    (state: any) => state.blog
  );
  const dispatch = useDispatch();

  const fetchBlogBySlug = async (slug: string) => {
    const { get } = await import("../useAxios");
    const { setDetailFetchLoading, setBlogContent, setCurrentBlog } =
      await import("../../store/slices/blogSlice");
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

  return { currentBlog, detailFetch, fetchBlogBySlug };
};

export default useBlogDetail;
