import React from "react";
import { Modal as BaseModal, Box, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import CloseIcon from "./CloseIcon";

const variants = {
  fullScreen: {
    width: { xs: "100%", md: "800px" },
    height: { xs: "100%", md: "auto" },
    maxHeight: { xs: "100%", md: "500px" },
  },
  base: {
    width: { xs: "90%", md: "800px" },
    height: { xs: "auto" },
    maxHeight: { xs: "100%", md: "500px" },
  },
};

const variantEnum = {
  fullScreen: "fullScreen",
  base: "base",
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  variant?: keyof typeof variantEnum;
  closeIcon?: boolean;
  children: React.ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  closeIcon = false,
  variant = "base",
  children,
}: ModalProps) => {
  return (
    <BaseModal open={isOpen} onClose={onClose}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Box {...variants[variant]} color="white" p={3} bgcolor={grey[900]}>
          <Stack gap={1}>
            {closeIcon && <CloseIcon onClose={onClose} />}
            {children}
          </Stack>
        </Box>
      </Box>
    </BaseModal>
  );
};

export default Modal;
