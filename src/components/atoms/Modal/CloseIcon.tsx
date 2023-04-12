import React from "react";
import { Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { red } from "@mui/material/colors";
const CloseIcon = ({ onClose }: { onClose: () => void }) => {
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
