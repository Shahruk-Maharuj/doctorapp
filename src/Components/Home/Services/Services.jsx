import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, ThemeProvider } from "@mui/material";
import Service from "../Service/Service";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const services = [
  {
    name: "Fluoride Treatment",
    desc: "Fluoride helps prevent tooth decay by making the enamel more resistant to acid attacks caused by plaque, bacteria, & sugars in the mouth.",
    img: "https://i.ibb.co/z6949zM/fluoride.png",
  },
  {
    name: "Cavity Filling",
    desc: "Cavity calls for your dentist to remove the decay & to fill in the tooth area that was removed in order to prevent further decay & strengthen.",
    img: "https://i.ibb.co/x5XJFgJ/cavity.png",
  },
  {
    name: "Teath Whitening",
    desc: "Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile.",
    img: "https://i.ibb.co/JqJvZQX/whitening.png",
  },
];

let theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
});

theme = responsiveFontSizes(theme);

const Services = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Typography sx={{fontWeight: "500", m: 2, color: "#6ACECE" }} align="center" variant="h6" component="div">
          Our Services
        </Typography>
        <Typography sx={{fontWeight: "700", mb: 5}} align="center" variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
    </ThemeProvider>
  );
};

export default Services;
