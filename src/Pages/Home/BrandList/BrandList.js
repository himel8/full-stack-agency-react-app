import React from "react";
import { Container, Grid } from "@mui/material";
import brand1 from "../../../logos/slack.png";
import brand2 from "../../../logos/google.png";
import brand3 from "../../../logos/uber.png";
import brand4 from "../../../logos/netflix.png";
import brand5 from "../../../logos/airbnb.png";

const BrandList = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Grid sx={{ alignItems: "center" }} container spacing={2}>
        <Grid item xs={6} md={1}></Grid>
        <Grid item xs={6} md={2}>
          <img style={{ width: "140px", height: "36px" }} src={brand1} alt="" />
        </Grid>
        <Grid item xs={6} md={2}>
          <img style={{ width: "129px", height: "44px" }} src={brand2} alt="" />
        </Grid>
        <Grid item xs={6} md={2}>
          <img style={{ width: "99px", height: "56px" }} src={brand3} alt="" />
        </Grid>
        <Grid item xs={6} md={2}>
          <img style={{ width: "120px", height: "67px" }} src={brand4} alt="" />
        </Grid>
        <Grid item xs={6} md={2}>
          <img style={{ width: "161px", height: "51px" }} src={brand5} alt="" />
        </Grid>
        <Grid item xs={6} md={1}></Grid>
      </Grid>
    </Container>
  );
};

export default BrandList;
