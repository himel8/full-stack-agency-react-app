import React from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#FBD062" }}>
      <Container>
        <Grid sx={{ justifyContent: "center" }} container spacing={2}>
          <Grid sx={{ textAlign: "left", pr: 5 }} item sm={12} md={5}>
            <Typography
              sx={{
                fontSize: "34px",
                mb: 5,
                lineHeight: "43px",
                color: "#111430",
                fontWeight: "bold",
                marginRight: "20px",
              }}
              variant="h2"
              gutterBottom
              component="div"
            >
              Let us handle your project, professionally.
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "24px",
                color: "#000000",
                fontWeight: "400",
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
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
            className="footerBtn"
            item
            xs={12}
            md={6}
          >
            <TextField
              sx={{ width: "83%", my: 1, backgroundColor: "#fff" }}
              id="outlined-basic"
              placeholder="Your Email Address"
              variant="outlined"
            />
            <TextField
              sx={{
                width: "83%",
                my: 1,
                backgroundColor: "#fff",
              }}
              id="outlined-basic"
              placeholder="Your name / Company's name"
              variant="outlined"
            />
            <TextareaAutosize
              maxRows={8}
              aria-label="maximum height"
              placeholder="Your message"
              style={{
                fontFamily: "poppins",
                fontSize: "14px",
                padding: "10px",
                width: "80%",
                borderRadius: "5px",
                height: "200px",
                margin: "10px 0",
              }}
            />
            <Button variant="contained" sx={{ width: "160px", my: 1 }}>
              send
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ mt: "50px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "24px",
              color: "#000000",
              fontWeight: "400",
              marginRight: "25px",
            }}
            variant="p"
            gutterBottom
            component="div"
          >
            copyright creative agency @ 2021
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
