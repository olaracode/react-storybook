import React from "react";
import BlogList from "./BlogList";

import { BlogT } from "../../molecules/blogs/Blog";
import { mockBlogs } from "../../../pages/home/Home";
export default {
  title: "Organism/BlogList",
  component: BlogList,
};

const Template = (args: { blogs: BlogT[] }) => <BlogList {...args} />;
export const Default = Template.bind({});
Default.args = {
  blogs: mockBlogs,
};
