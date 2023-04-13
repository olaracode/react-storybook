import React from "react";
import SearchModal, { SearchModalProps } from "./SearchModal";
import { fakeBlogs } from "@/utils/blogs";
export default {
  title: "Components/Organisms/Modals/SearchModal",
  component: SearchModal,
};

const Template = (args: SearchModalProps) => <SearchModal {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => undefined,
  blogs: fakeBlogs,
};
