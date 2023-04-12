import React from "react";
import BlogList from "../../components/organism/blog/BlogList";
import Blog, { BlogT } from "../../components/molecules/blogs/Blog";
export const mockBlogs: BlogT[] = [
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
  return (
    <div>
      <BlogList blogs={mockBlogs} />
    </div>
  );
};

export default Home;
