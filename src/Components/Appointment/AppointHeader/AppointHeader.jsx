import { Container, ThemeProvider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import React from "react";
import Calender from "../../Global/Calender/Calender";

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

const Appoinment = ({date, setDate}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box style={bannerBg} sx={{ flexGrow: 1, pt: 6, pb: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} style={verticalCenter}>
              <Box>
                <Typography
                  sx={{ fontWeight: "700", mt: 2, mb: 2 }}
                  variant="h4"
                >
                  Appoinment
                </Typography>
                <Calender date={date} setDate={setDate}/>
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

export default Appoinment;
