import React from "react";
import SearchModal, { SearchModalProps } from "./SearchModal";
import { defaultBlogs } from "../../layout/Navbar";
export default {
  title: "Components/Organisms/Modals/SearchModal",
  component: SearchModal,
};

const Template = (args: SearchModalProps) => <SearchModal {...args} />;
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => undefined,
  blogs: defaultBlogs,
};
