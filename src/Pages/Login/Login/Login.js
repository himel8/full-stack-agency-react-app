import { Button, Container, Typography, Grid, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import React from "react";
import logo from "../../../logos/logo.png";
import { Link } from "react-router-dom";
const Login = () => {
  const theme = useTheme();
  const navStyle = makeStyles({
    loginBtnsize: {
      [theme.breakpoints.up("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  });
  const { loginBtnsize } = navStyle();
  const url = "https://img.icons8.com/color/48/000000/google-logo.png";
  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={{ my: 5 }}>
        <img style={{ width: "150px", height: "47px" }} src={logo} alt="" />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              p: 5,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #ABABAB",
              height: "350px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                fontFamily: "Montserrat",
                mb: 5,
              }}
              variant="h3"
              gutterBottom
              component="div"
            >
              Login With
            </Typography>
            <Button
              className={loginBtnsize}
              sx={{
                mb: 3,
                justifyContent: "flex-start",
                alignItems: "center",
                borderRadius: "35px",
                border: "1px solid #C7C7C7",
                pl: 0,
              }}
            >
              <img src={url} alt="" />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#000000",
                  fontFamily: "Montserrat",
                  textTransform: "capitalize",
                  mt: "5px",
                  ml: "28%",
                }}
                variant="h3"
                gutterBottom
                component="div"
              >
                Continue with Google
              </Typography>
            </Button>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#000000",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              variant="h3"
              gutterBottom
              component="div"
            >
              Don’t have an account?{" "}
              <span className="logintext">
                <Link to="register">Create an account</Link>
              </span>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
