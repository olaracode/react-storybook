import React from "react";
import {
  Box,
  Typography,
  Stack,
  Divider,
  TextField,
  styled,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { blue, red } from "@mui/material/colors";
import Modal from "../../atoms/Modal/Modal";

export type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  blogs: { title: string; content: string }[];
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

const SearchModal = ({
  isOpen = false,
  onClose = () => undefined,
}: SearchModalProps) => {
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
      <Typography textAlign={"end"} pt={1}>
        ReactDocs
      </Typography>
      <Divider sx={{ my: 2, borderColor: blue[200] }} />
    </Modal>
  );
};

export default SearchModal;
