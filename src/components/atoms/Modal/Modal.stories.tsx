import React from "react";
import Modal, { ModalProps } from "./Modal";

export default {
  title: "Components/Atoms/Modals/Modal",
  component: Modal,
};

const Template = (args: ModalProps) => <Modal {...args} />;
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => undefined,
  children: <div>Modal Content</div>,
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  isOpen: true,
  onClose: () => undefined,
  variant: "fullScreen",
  children: <div>Modal Content</div>,
};
