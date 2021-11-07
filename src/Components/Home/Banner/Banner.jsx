import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, ThemeProvider, Typography } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Link } from "react-router-dom";

const bannerBg = {
  background: `url('https://i.ibb.co/R2T1NV5/bg.png')`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 450,
};

let theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

theme = responsiveFontSizes(theme);

const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box style={bannerBg} sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} style={verticalCenter}>
              <Box>
                <Typography
                  sx={{ fontWeight: "700", mt: 2, mb: 2 }}
                  variant="h3"
                >
                  Your New Smile <br /> Starts Here
                </Typography>
                <Typography
                  sx={{ mt: 2, mb: 2 }}
                  variant="body1"
                  color="text.secondary"
                >
                  We provide sophisticated 3D Intraoral Scanning, Cosmetic
                  Digital Smile Design, Laser dentistry along with standard
                  services like Crowns, Bridges, Dental Implants, Braces and
                  General Dentistry.
                </Typography>
                <Link style={{ textDecoration: "none", color: "#fff" }} to="/appoinment">
                <Button
                  sx={{
                    mb: 6,
                    pt: 1.5,
                    pb: 1.5,
                    pr: 3,
                    pl: 3,
                    borderRadius: 0,
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(25,211,174,1) 0%, rgba(15,207,236,1) 100%)",
                    boxShadow: "none",
                  }}
                  variant="contained"
                  startIcon={<EventIcon />}
                >
                  Get appointment
                </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={7} style={verticalCenter}>
              <img
                style={{ width: "500px", padding: '100px' }}
                src="https://i.ibb.co/DkvmhgS/chair.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Banner;
