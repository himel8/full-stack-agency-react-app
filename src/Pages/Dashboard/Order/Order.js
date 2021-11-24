import {
  TextField,
  TextareaAutosize,
  Button,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
const Order = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              sx={{ backgroundColor: "#fff", margin: "5px 0" }}
              id="outlined-basic"
              placeholder="Your name / compay's name"
              variant="outlined"
            />
            <TextField
              sx={{ backgroundColor: "#fff", margin: "5px 0" }}
              id="outlined-basic"
              type="email"
              placeholder="Your email address"
              variant="outlined"
            />
            <TextField
              sx={{ backgroundColor: "#fff", margin: "5px 0" }}
              id="outlined-basic"
              placeholder="Graphic Design"
              variant="outlined"
            />
            <TextareaAutosize
              maxRows={8}
              aria-label="maximum height"
              placeholder="Project Details"
              style={{
                fontFamily: "poppins",
                fontSize: "14px",
                padding: "10px",
                borderRadius: "5px",
                height: "120px",
                margin: "5px 0",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                sx={{
                  backgroundColor: "#fff",
                  margin: "5px 3px 5px 0",
                  width: "100%",
                }}
                id="outlined-basic"
                type="number"
                placeholder="Price"
                variant="outlined"
              />
              <InputLabel
                sx={{
                  backgroundColor: "#DEFFED",
                  color: "#009444",
                  textTransform: "capitalize",
                  fontFamily: "poppins",
                  width: "100%",
                  ml: "3px",
                  py: "15px ",
                  border: "1px solid #009444",
                }}
                htmlFor="photo"
              >
                {" "}
                Upload project file
              </InputLabel>
              <Input
                sx={{ display: "none" }}
                accept="image/*"
                id="photo"
                multiple
                type="file"
              />
            </Box>
            <Button
              className="orderBtn"
              sx={{ textAlign: "left", width: "160px", my: 1 }}
            >
              send
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Order;
