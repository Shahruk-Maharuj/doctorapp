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
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

let theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

theme = responsiveFontSizes(theme);

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert(`Your password did't Match!`);
      return;
    }
    registerUser(loginData.email, loginData.password);
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
                Register
              </Typography>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert sx={{ width: "70%", m: 1 }} severity="success" color="success">
                  User Created Successfully
                </Alert>
              )}
              {authError && (
                <Alert sx={{ width: "70%", m: 1 }} severity="error" color="error">
                  {authError}
                </Alert>
              )}
              {!isLoading && (
                <form onSubmit={handleLoginSubmit}>
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-basic"
                    name="email"
                    type="email"
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
                  <TextField
                    sx={{ width: "75%", m: 1 }}
                    id="standard-password-input"
                    label="Retype your Password"
                    name="password2"
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
                  <Link style={{ textDecoration: "none" }} to="/login">
                    <Button variant="text">
                      Already Registered? Please Login
                    </Button>
                  </Link>
                </form>
              )}
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

export default Register;
