import React from "react";
import BlogList from "../../components/organism/blog/BlogList";
import useBlogs from "../../hooks/useBlogs";
export const mockBlogs = [
  {
    title: "Prueba",
    tags: ["Tag1", "tag2"],
    content: "# una prueba rapida",
  },
  {
    title: "Prueba",
    tags: ["Tag1", "tag2"],
    content: "# una prueba rapida",
  },
];
const Home = () => {
  const { blogs, loading, error } = useBlogs();

  return <div>{blogs && <BlogList blogs={blogs} />}</div>;
};

export default Home;
