import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useTheme } from "@/hooks";
const Layout = () => {
  const { theme } = useTheme();
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          minHeight: "90vh",
          py: 12,
          color: theme.value === "light" ? "black" : "white",
          bgcolor: theme.value === "light" ? "white" : "rgba(11, 46, 77, 1)",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
