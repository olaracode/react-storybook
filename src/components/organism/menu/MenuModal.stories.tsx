import React from "react";
import MenuModal, { MenuModalProps } from "./MenuModal";
export default {
  title: "Components/Organisms/Modals/MenuModal",
  component: MenuModal,
};

const Template = (args: MenuModalProps) => <MenuModal {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => undefined,
};
