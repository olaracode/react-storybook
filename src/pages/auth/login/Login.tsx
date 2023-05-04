import {
  Container,
  Box,
  Card,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { useTheme } from "@/hooks";
import { Button } from "@/components/atoms";

const Login = () => {
  const { theme } = useTheme();
  const backgroundColor = theme.value === "light" ? "#fff" : "#212121";
  const textColor = theme.value === "light" ? blue[600] : blue[900];
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          sx={{
            py: 3,
            px: 4,
            width: { xs: "100%", sm: "0%", md: "50%" },
            backgroundColor,
          }}
        >
          <Typography textAlign={"center"} fontSize={20}>
            ReDocs
          </Typography>
          <Stack spacing={2}>
            <TextField
              InputLabelProps={{
                sx: {
                  color: textColor,
                },
              }}
              variant="outlined"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              variant="outlined"
              label="password"
              type="password"
              fullWidth
            />
            <Button onClick={() => {}} variant="light">
              <Typography>Sign In</Typography>
            </Button>
          </Stack>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;
