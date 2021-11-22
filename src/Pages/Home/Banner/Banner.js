import React from "react";
import frame from "../../../logos/Frame.png";
import { Box, Grid, Typography, Container } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FBD062",
        marginTop: "-105px",
        padding: "112px 0",
      }}
    >
      <Container>
        <Grid sx={{ alignItems: "center" }} container spacing={10}>
          <Grid sx={{ textAlign: "left" }} item sm={12} md={5}>
            <Typography
              sx={{
                fontSize: "48px",
                lineHeight: "60px",
                color: "#111430",
                fontWeight: "bold",
                marginRight: "20px",
              }}
              variant="h2"
              gutterBottom
              component="div"
            >
              Let’s Grow Your Brand To The Next Level
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#000000",
                fontWeight: "500",
                marginRight: "25px",
              }}
              variant="p"
              gutterBottom
              component="div"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </Typography>
          </Grid>
          <Grid item sm={12} md={7}>
            <img style={{ width: "100%" }} src={frame} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
