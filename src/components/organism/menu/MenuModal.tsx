import React from "react";
import { Typography, Divider, TextField, styled, Box } from "@mui/material";
import { blue } from "@mui/material/colors";
import { DarkMode, Login } from "@mui/icons-material";
import { Modal, Button } from "@/components/atoms";
import { useTheme } from "@/hooks";

export type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
  toggle: () => void;
  navigation: (path: string) => void;
};

const SearchInput = styled(TextField)({
  color: "white",
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": {
      borderColor: blue[500],
      color: "white",
    },
    "&:hover fieldset": {
      borderColor: blue[500],
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: blue[500],
      color: "white",
    },
  },
});

const MenuModal = ({
  isOpen = false,
  onClose = () => undefined,
  toggle = () => undefined,
  navigation = (path) => undefined,
}: MenuModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      variant="fullScreen"
      closeIcon={true}
    >
      <SearchInput
        label="Search"
        fullWidth
        variant="outlined"
        InputLabelProps={{ style: { color: "white" } }}
        sx={{ color: "white" }}
      />
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display="flex" gap={2}>
          <Button onClick={toggle} variant="light">
            <DarkMode />
          </Button>
          <Button variant="light" onClick={() => navigation("/auth/login")}>
            Login
            <Login />
          </Button>
        </Box>
        <Typography textAlign={"end"} pt={1}>
          ReactDocs
        </Typography>
      </Box>
      <Divider sx={{ my: 2, borderColor: blue[200] }} />
    </Modal>
  );
};

export default MenuModal;
