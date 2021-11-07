import { Container, Grid } from "@mui/material";
import React from "react";
import Booking from "./Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05 am – 11:30 am",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5:00 pm – 6:30 pm",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7:00 am – 8:30 am",
    space: 10,
  },
  {
    id: 5,
    name: "Mouth Cleaning",
    time: "6:00 AM - 7:00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Oral Surgery",
    time: "7:00 AM - 8:00 AM",
    space: 10,
  },
];

const Availability = ({ date }) => {
  return (
    <Container maxWidth="md" sx={{ color: "#1CC7C1" }}>
      <h2 align="center">Available Appointments on {date.toDateString()}</h2>
      <Grid sx={{ mt: 6, mb: 6 }} container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking} date={date} />
        ))}
      </Grid>
    </Container>
  );
};

export default Availability;
