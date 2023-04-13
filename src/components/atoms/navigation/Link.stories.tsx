import React from "react";
import Link, { LinkT } from "./Link";

export default {
  title: "Components/Atoms/Navigation/Link",
  component: Link,
};

const Template = (args: LinkT) => <Link {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  content: "Link",
  to: "/",
  docs: true,
};
