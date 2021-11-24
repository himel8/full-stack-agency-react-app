import {
  TextField,
  TextareaAutosize,
  Button,
  Typography,
  Rating,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
const Review = () => {
  const [value, setValue] = useState(2);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              sx={{ backgroundColor: "#fff", margin: "5px 0" }}
              id="outlined-basic"
              placeholder="Your name "
              variant="outlined"
            />

            <TextField
              sx={{ backgroundColor: "#fff", margin: "5px 0" }}
              id="outlined-basic"
              placeholder="Company’s name, Designation"
              variant="outlined"
            />
            <Box sx={{ my: "5px", display: "flex", alignItems: "center" }}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 600 }}
                component="p"
              >
                Ratings :{" "}
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </Box>
            <TextareaAutosize
              maxRows={8}
              aria-label="maximum height"
              placeholder="Description"
              style={{
                fontFamily: "poppins",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "5px",
                height: "120px",
                margin: "5px 0",
              }}
            />
            <Button
              className="orderBtn"
              sx={{ textAlign: "left", width: "160px", my: 1 }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Review;
