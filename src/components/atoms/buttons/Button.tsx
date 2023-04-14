import React from "react";
import { Button as MUIButton } from "@mui/material";
import { variants } from "./Button.styles";

type ButtonT = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: keyof typeof variants;
};

const Button = ({ onClick, variant = "base", children }: ButtonT) => {
  return (
    <MUIButton sx={variants[variant]} onClick={onClick}>
      {children}
    </MUIButton>
  );
};

export default Button;
