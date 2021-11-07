import { Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { Button, ThemeProvider, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import EventIcon from "@mui/icons-material/Event";
import BookingModal from "../../BookingModal/BookingModal";

let theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

theme = responsiveFontSizes(theme);

const Booking = ({ booking, date }) => {
  const { name, time, space } = booking;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          style={{
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
          align="center"
        >
          <Typography
            sx={{ fontWeight: "700", pt: 3, pb: 1.5, color: "#1CC7C1" }}
            variant="h6"
          >
            {name}
          </Typography>
          <Typography sx={{ fontWeight: "700", color: "#000" }} variant="h6">
            {time}
          </Typography>
          <Typography
            sx={{ mt: 2, mb: 2 }}
            variant="body1"
            color="text.secondary"
          >
            {space} SPACES AVAILABLE.
          </Typography>
          <Button
            sx={{
              pt: 1.5,
              pb: 1.5,
              pr: 3,
              pl: 3,
              mb: 4,
              borderRadius: 0,
              color: "#fff",
            }}
            onClick={handleOpen}
            style={{
              background:
                "linear-gradient(90deg, rgba(25,211,174,1) 0%, rgba(15,207,236,1) 100%)",
              boxShadow: "none",
            }}
            variant="text"
            startIcon={<EventIcon />}
          >
            Book appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        date={date}
        booking={booking}
        open={open}
        handleClose={handleClose}
      />
    </ThemeProvider>
  );
};

export default Booking;
