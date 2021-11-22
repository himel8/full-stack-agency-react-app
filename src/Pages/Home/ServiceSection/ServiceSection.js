import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ServiceSection = () => {
  return (
    <Box>
      <Container>
        <Typography
          sx={{
            color: "#2D2D2D",
            fontSize: "34px",
            lineHeight: "43px",
            fontWeight: "600",
            fontFamily: "poppins",
          }}
          variant="h3"
          gutterBottom
          component="div"
        >
          Provide awesome <span style={{ color: "#7AB259" }}>services</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default ServiceSection;
