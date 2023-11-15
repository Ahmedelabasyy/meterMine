import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Language } from "@mui/icons-material";

function Login() {
  return (
    <Stack direction="row" sx={{ width: "100%", height: "100vh" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          flex: 1,
          padding: "0px 20px",
        }}
      >
        <Box sx={{ width: "65%" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <img width={84} src="./mini.png" alt="minilogo" />
            <Language sx={{ color: "#d99480" }} />
          </Stack>
          <Typography pl={1} mt={15} mb={4} variant="h4">
            Welcome Back to Andorra
          </Typography>
          <form>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%", marginTop: "10px" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Typography
              sx={{ textAlign: "end", width: "100%" }}
              pl={1}
              mt={2}
              mb={4}
              mr={2}
            >
              Forget Pasword?
            </Typography>
            <Button
              sx={{
                padding: " 15px 20px",
                width: "100%",
                backgroundColor: "#d8917c",
                "&:hover": { backgroundColor: "#d8917cae" },
              }}
              variant="contained"
            >
              Sign In
            </Button>
          </form>
          <Divider
            sx={{ my: 4, borderColor: "lightGray", borderWidth: "1px" }}
          />
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <img width={34} src="./mini.png" alt="minilogo" />
            <Typography>Privacy Policy</Typography>
          </Stack>
        </Box>
      </Stack>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url(https://andorra.smart1.ai/static/media/background-white.80d0f04da29580013e71.png)",
        }}
      >
        <img src="./logo.png" alt="logo" width={250} />
      </Box>
    </Stack>
  );
}

export default Login;
