import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const Service = (props) => {
  const { name, desc, img } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, m: 2 }} color="text.secondary" gutterBottom>
            <CardMedia
              component="img"
              style={{ width: "auto", height: "60px", margin: "0 auto" }}
              image={img}
              alt="green iguana"
            />
          </Typography>
          <Typography sx={{ m: 2 }} align="center" variant="h5" component="div">
            {name}
          </Typography>
          <Typography align="center" variant="body1" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
