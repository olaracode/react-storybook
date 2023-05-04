import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import MenuModal from "../organism/menu/MenuModal";
import { Link } from "@/components/atoms";
import { Layout } from "@/hooks";
import { useTheme } from "@/hooks";
import { useNavigate } from "react-router-dom";
export type NavbarT = {
  docs?: boolean;
};

const Navbar = ({ docs = false }: NavbarT) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const { toggle } = useTheme();
  const { show } = Layout.useScroll();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleNavigation = (route: string) => {
    navigate(route);
    handleClose();
  };
  // CTRL + K Event -> Open Search Modal
  const handleCTRLK = (e: KeyboardEvent) => {
    if ((e.ctrlKey && e.key === "k") || (e.metaKey && e.key === "k")) {
      handleOpen();
    }
  };

  // Add Event Listener on Mount
  React.useEffect(() => {
    window.addEventListener("keydown", handleCTRLK);
    return () => {
      window.removeEventListener("keydown", handleCTRLK);
    };
  }, []);

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
            <Button
              onClick={handleOpen}
              sx={{
                color: "white",
                backgroundColor: "rgba(33, 33, 33, 0.6)",
                boxShadow: "0 0 10px #007bff",
                display: "flex",
                gap: 1,
              }}
            >
              <Typography display={{ xs: "none", sm: "block" }}>
                <kbd>CTRL</kbd>
                <span> + </span>
                <kbd>K</kbd>
              </Typography>
              <Menu />
            </Button>
          </Box>
        </Container>
      </Box>
      <MenuModal
        isOpen={isOpen}
        onClose={handleClose}
        toggle={toggle}
        navigation={handleNavigation}
      />
    </>
  );
};

export default Navbar;
