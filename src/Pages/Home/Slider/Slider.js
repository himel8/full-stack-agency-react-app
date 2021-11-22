import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import carouse1 from "../../../carousel/carousel-1.png";
import carouse2 from "../../../carousel/carousel-2.png";
import carouse3 from "../../../carousel/carousel-3.png";
import carouse4 from "../../../carousel/carousel-4.png";
import carouse5 from "../../../carousel/carousel-5.png";

const Slider = () => {
  const images = [carouse1, carouse2, carouse3, carouse4, carouse5];
  console.log(images);
  return (
    <Box sx={{ backgroundColor: "#111430", py: 5 }}>
      <Container>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "34px",
              lineHeight: "43px",
              fontWeight: "600",
              fontFamily: "poppins",
            }}
            variant="h3"
            gutterBottom
            component="div"
          >
            Here are some of <span style={{ color: "#7AB259" }}>our works</span>
          </Typography>
        </Box>
        <Box>
          <Carousel itemsToShow={3}>
            {images.map((image) => (
              <Item>
                <img
                  style={{ width: "100%", height: "220px" }}
                  src={image}
                  alt=""
                />
              </Item>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

export default Slider;
