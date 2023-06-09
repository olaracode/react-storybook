import React from "react";
import Modal, { ModalProps } from "./Modal";

export default {
  title: "Components/Atoms/Modal/Modal",
  component: Modal,
};

const Template = (args: ModalProps) => <Modal {...args} />;
export const Default: any = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => undefined,
  children: <div>Modal Content</div>,
};

export const FullScreen: any = Template.bind({});
FullScreen.args = {
  isOpen: true,
  onClose: () => undefined,
  variant: "fullScreen",
  children: <div>FullScreenModal</div>,
};

export const WithCloseIcon: any = Template.bind({});
WithCloseIcon.args = {
  isOpen: true,
  onClose: () => undefined,
  closeIcon: true,
  children: <div>Modal Content With close icon</div>,
};
