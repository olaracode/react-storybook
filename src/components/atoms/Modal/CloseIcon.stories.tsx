import React from "react";
import CloseIcon, { CloseIconProps } from "./CloseIcon";
export default {
  title: "Components/Atoms/Modal/CloseIcon",
  component: CloseIcon,
};

const Template = (args: CloseIconProps) => <CloseIcon {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  onClose: () => console.log("CloseIcon clicked"),
};
