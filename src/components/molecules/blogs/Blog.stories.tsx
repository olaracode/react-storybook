import React from "react";
import Blog, { BlogT } from "./Blog";
export default {
  title: "Components/Molecules/Blog",
  component: Blog,
};

const Template = (args: BlogT) => <Blog {...args} />;
export const Preview = Template.bind({});
Preview.args = {
  title: "Blog Title",
  content: "# heading 1",
  tags: ["tag1", "tag2"],
};

export const Full = Template.bind({});
Full.args = {
  title: "Blog Title",
  content: "# heading 1",
  tags: ["tag1", "tag2"],
  isPreview: false,
};
