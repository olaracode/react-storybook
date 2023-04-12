import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import SearchModal from "../organism/search/SearchModal";
import { Link } from "@/components/atoms";

export type NavbarT = {
  docs?: boolean;
};

const Navbar = ({ docs = false }: NavbarT) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Box sx={{ backgroundColor: grey[900], py: 2, color: "white" }}>
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
