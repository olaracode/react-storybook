import React from "react";
import SearchModal, { SearchModalProps } from "./SearchModal";
import { mockBlogs } from "../../../pages/home/Home";
export default {
  title: "Components/Organisms/Modals/SearchModal",
  component: SearchModal,
};

const Template = (args: SearchModalProps) => <SearchModal {...args} />;
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => undefined,
  blogs: mockBlogs,
};
