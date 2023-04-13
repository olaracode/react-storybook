import React from "react";
import BlogList from "./BlogList";
import { BlogT } from "@/hooks/useBlogs";
import { fakeBlogs } from "@/utils/blogs";
export default {
  title: "Components/Organisms/BlogList",
  component: BlogList,
};

const Template = (args: { blogs: BlogT[] }) => <BlogList {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  blogs: fakeBlogs,
};
