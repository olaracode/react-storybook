import React from "react";
import Blog from "./Blog";
import { BlogT } from "../../../hooks/useBlogs";
import { fakeBlogs } from "../../../utils/blogs";
export default {
  title: "Components/Molecules/Blog",
  component: Blog,
};

const Template = (args: BlogT) => <Blog {...args} />;
export const Preview = Template.bind({});
Preview.args = {
  ...fakeBlogs[0],
  isPreview: true,
};

export const Full = Template.bind({});
Full.args = {
  ...fakeBlogs[0],
  isPreview: false,
};
