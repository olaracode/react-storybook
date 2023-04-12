import React from "react";
import { Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { red } from "@mui/material/colors";

export type CloseIconProps = {
  onClose: () => void;
};

const CloseIcon = ({ onClose }: CloseIconProps) => {
  return (
    <Box display="flex" justifyContent="end">
      <IconButton
        sx={{
          ":hover": {
            color: red[600],
          },
        }}
        onClick={onClose}
      >
        <Close />
      </IconButton>
    </Box>
  );
};

export default CloseIcon;
