import {
  Button,
  TextField,
  TextareaAutosize,
  InputLabel,
  Grid,
} from "@mui/material";
import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Box } from "@mui/system";

const AddService = () => {
  return (
    <Box sx={{ m: "20px" }}>
      <Grid
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#fff",
          borderRadius: "15px",
          padding: "20px 10px",
        }}
        container
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <InputLabel
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#232323",
                  fontFamily: "poppins",
                  textAlign: "left",
                }}
                shrink
                htmlFor="serviceTitle"
              >
                Service Title
              </InputLabel>
              <TextField
                sx={{ backgroundColor: "#fff", margin: "5px 0" }}
                id="serviceTitle"
                placeholder="Enter Title"
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <InputLabel
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#232323",
                  fontFamily: "poppins",
                  textAlign: "left",
                }}
                shrink
                htmlFor="Description"
              >
                Description
              </InputLabel>
              <TextareaAutosize
                id="Description"
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
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <InputLabel
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#232323",
                fontFamily: "poppins",
                textAlign: "left",
              }}
              shrink
              htmlFor="Icon"
            >
              Icon
            </InputLabel>
            <Button
              id="Icon"
              startIcon={<CloudUploadOutlinedIcon />}
              sx={{
                backgroundColor: "#DEFFED",
                color: "#009444",
                textTransform: "capitalize",
                fontFamily: "poppins",
                width: "30%",
                ml: "3px",
                py: "15px ",
                border: "1px solid #009444",
              }}
              component="span"
            >
              Upload Image
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box className="addserviceBtn" sx={{ textAlign: "Right" }}>
        <Button sx={{ width: "160px", my: 1 }}>submit</Button>
      </Box>
    </Box>
  );
};

export default AddService;
