import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

let theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

theme = responsiveFontSizes(theme);

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Grid sx={{ mt: 8 }} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontWeight: 700, m: 1 }}
                variant="h6"
                color="initial"
              >
                Login
              </Typography>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert
                  sx={{ width: "70%", m: 1 }}
                  severity="success"
                  color="success"
                >
                  Login Successfully!
                </Alert>
              )}
              {authError && (
                <Alert
                  sx={{ width: "70%", m: 1 }}
                  severity="error"
                  color="error"
                >
                  {authError}
                </Alert>
              )}
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  name="email"
                  onChange={handleOnChange}
                  label="Your Mail"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-password-input"
                  label="Password"
                  name="password"
                  onChange={handleOnChange}
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                />
                <Button
                  sx={{
                    pt: 1.5,
                    pb: 1.5,
                    pr: 3,
                    pl: 3,
                    borderRadius: 0,
                    color: "#fff",
                    width: "75%",
                    m: 1,
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(25,211,174,1) 0%, rgba(15,207,236,1) 100%)",
                    boxShadow: "none",
                  }}
                  type="submit"
                  variant="text"
                >
                  Sign in
                </Button>
                <Link style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User? Please Register</Button>
                </Link>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%" }}
                src="https://i.ibb.co/RgfWKrN/login.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;
