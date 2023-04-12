import BlogsSkeleton, { BlogsSkeletonProps } from "./BlogsSkeleton";

export default {
  title: "Components/Molecules/Blogs/BlogsSkeleton",
  component: BlogsSkeleton,
};

const Template = (args: BlogsSkeletonProps) => <BlogsSkeleton {...args} />;
export const Home = Template.bind({});
Home.args = {
  variant: "home",
};

export const Blog = Template.bind({});
Blog.args = {
  variant: "blog",
};
