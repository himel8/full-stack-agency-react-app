import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FeedBack = () => {
  return (
    <Box>
      <Container>
        <Typography
          sx={{
            color: "#171B4E",
            fontSize: "34px",
            lineHeight: "43px",
            fontWeight: "600",
            fontFamily: "poppins",
          }}
          variant="h3"
          gutterBottom
          component="div"
        >
          Clients <span style={{ color: "#7AB259" }}>Feedback</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default FeedBack;
