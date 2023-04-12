import { BlogList } from "@/components/organism";
import { useBlogs } from "@/hooks";

const Home = () => {
  const { blogs, loading, error } = useBlogs();

  return <div>{blogs && <BlogList blogs={blogs} />}</div>;
};

export default Home;
