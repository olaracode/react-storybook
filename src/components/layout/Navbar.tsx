import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import SearchModal from "../organism/search/SearchModal";

export const defaultBlogs = [
  { title: "The Shawshank Redemption", content: "1994" },
  { title: "The Godfather", content: "1972" },
  { title: "The Godfather: Part II", content: "1974" },
  { title: "The Dark Knight", content: "2008" },
  { title: "12 Angry Men", content: "1957" },
  { title: "Schindler's List", content: "1993" },
  { title: "Pulp Fiction", content: "1994" },
  {
    title: "The Lord of the Rings: The Return of the King",
    content: "2003",
  },
  { title: "The Good, the Bad and the Ugly", content: "1966" },
  { title: "Fight Club", content: "1999" },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    content: "2001",
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    content: "1980",
  },
  { title: "Forrest Gump", content: "1994" },
  { title: "Inception", content: "2010" },
  {
    title: "The Lord of the Rings: The Two Towers",
    content: "2002",
  },
  { title: "One Flew Over the Cuckoo's Nest", content: "1975" },
  { title: "Goodfellas", content: "1990" },
  { title: "The Matrix", content: "1999" },
  { title: "Seven Samurai", content: "1954" },
  {
    title: "Star Wars: Episode IV - A New Hope",
    content: "1977",
  },
];

const Navbar = () => {
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
              <Typography>RMuiBook</Typography>
            </Box>
            <Box>
              <IconButton onClick={handleOpen} sx={{ color: "white" }}>
                <Search />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
      <SearchModal isOpen={isOpen} onClose={handleClose} blogs={defaultBlogs} />
    </>
  );
};

export default Navbar;
