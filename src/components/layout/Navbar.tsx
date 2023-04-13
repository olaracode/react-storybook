import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import SearchModal from "../organism/search/SearchModal";
import { Link } from "@/components/atoms";
import { useScroll } from "@/hooks";
export type NavbarT = {
  docs?: boolean;
};

const variants = {
  initial: {
    backgroundColor: grey[900],
    color: "white",
  },
  frosted: {
    backgroundColor: "rgba(33, 33, 33, 0.6)",
    color: "white",
  },
};

const Navbar = ({ docs = false }: NavbarT) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { show } = useScroll();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Box
        sx={{
          backgroundColor: show ? grey[900] : "rgba(33, 33, 33, 0.6)",
          color: "white",
          py: 2,
          position: "fixed",
          width: "100%",
          top: "0px",
          left: "0px",
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          webkitBackdropFilter: "blur(10px)",
        }}
      >
        <Container>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Link
                variant="primary"
                content="ReDocs + Storybook"
                color="#fafafa"
                as={"h6"}
                to="/"
                docs={docs}
              />
            </Box>
            <Box>
              <IconButton onClick={handleOpen} sx={{ color: "white" }}>
                <Search />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
      <SearchModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default Navbar;
