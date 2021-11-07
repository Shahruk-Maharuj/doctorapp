import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, ThemeProvider, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const appointmentBg = {
  background: `url('https://i.ibb.co/hVMZYsY/appointment-bg.png')`,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 150,
};

let theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

theme = responsiveFontSizes(theme);

const AppoinmentBanner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box
          style={appointmentBg}
          sx={{ flexGrow: 1, borderRadius: 5, mt: 10, mb: 10 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: 400, marginTop: "-100px" }}
                src="https://i.ibb.co/NCvBfY2/doctor.png"
                alt=""
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: "500", mt: 2, color: "#6ACECE" }}
                  variant="h6"
                >
                  APPOINTMENT
                </Typography>
                <Typography
                  sx={{ fontWeight: "700", mt: 2, mb: 2, color: "#fff" }}
                  variant="h4"
                >
                  Make an appointment Today
                </Typography>
                <Typography
                  sx={{ mt: 2, mb: 3, color: "#fff" }}
                  variant="body1"
                  color="text.secondary"
                >
                  It is a long established fact that a reader will be
                  distractedby the readable content of a page when looking at
                  its
                </Typography>
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
                  startIcon={<InfoIcon />}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AppoinmentBanner;
