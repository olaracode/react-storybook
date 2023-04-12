import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
const variants = {
  primary: {
    textDecoration: "none",
    color: "black",
  },
  base: {
    color: blue[600],
  },
};

const asEnum = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "subtitle1",
  subtitle2: "subtitle2",
  body1: "body1",
  body2: "body2",
  button: "button",
  caption: "caption",
  overline: "overline",
};

export type LinkT = {
  content: string;
  to: string;
  color?: string;
  variant?: keyof typeof variants;
  as?: keyof typeof asEnum;
  docs?: boolean;
};

const Link = ({
  content,
  to,
  variant = "base",
  as = "body1",
  color,
  docs = false,
}: LinkT) => {
  return (
    <MuiLink
      component={!docs ? RouterLink : MuiLink}
      to={to}
      sx={{ ...variants[variant], color: color || null }}
    >
      <Typography variant={as}>{content}</Typography>
    </MuiLink>
  );
};

export default Link;
