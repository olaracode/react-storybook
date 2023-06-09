import BlogSkeleton, { BlogSkeletonT } from "./BlogSkeleton";

export default {
  title: "Components/Atoms/Blog/BlogSkeleton",
  component: BlogSkeleton,
};

const Template = (args: BlogSkeletonT) => <BlogSkeleton {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  isPreview: true,
};
