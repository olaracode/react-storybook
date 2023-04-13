import React from "react";
import Blog from "./Blog";
import { BlogT } from "../../../hooks/useBlogs";
import { fakeBlogs } from "../../../utils/blogs";

export default {
  title: "Components/Molecules/Blogs/Blog",
  component: Blog,
};

const Template = (args: BlogT) => <Blog {...args} />;
export const Preview: any = Template.bind({});
Preview.args = {
  ...fakeBlogs[0],
  isPreview: true,
};

export const Full: any = Template.bind({});
Full.args = {
  ...fakeBlogs[0],
  isPreview: false,
};
