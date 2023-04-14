import { BlogList } from "@/components/organism";
import { useBlogList } from "@/hooks";
import { BlogsSkeleton } from "@/components/molecules";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { blogs, loading } = useBlogList();
  const navigate = useNavigate();
  const navigation = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };
  if (loading) return <BlogsSkeleton variant="home" />;
  return <>{blogs && <BlogList blogs={blogs} navigation={navigation} />}</>;
};

export default Home;
