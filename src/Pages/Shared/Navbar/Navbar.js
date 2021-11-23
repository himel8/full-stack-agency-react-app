import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { ListItemText, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import logo from "../../../logos/logo.png";

const Navbar = () => {
  const [state, setState] = useState(false);
  const theme = useTheme();
  const navStyle = makeStyles({
    navIconContainer: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
        color: "black",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navItem: {
      textDecoration: "none",
      color: "#474747",
      marginLeft: "20px",
    },
    navImage: {
      width: "150px",
      height: "47px",
    },
    mobileNavItem: {
      textDecoration: "none",
      color: "#474747",
    },
  });
  const {
    navItemContainer,
    navItem,
    navIconContainer,
    navImage,
    mobileNavItem,
  } = navStyle();

  return (
    <Box sx={{ mx: 9 }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="navBar">
          <Toolbar>
            <Box className={navIconContainer}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, color: "#222" }}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: "left" }}>
              <img className={navImage} src={logo} alt="" />
            </Box>
            <Box className={navItemContainer}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  fontWeight: "600",
                  borderBottom: isActive ? "2px solid green" : "",
                })}
                className={navItem}
              >
                Home
              </NavLink>
              <NavLink
                to="portfolio"
                style={({ isActive }) => ({
                  fontWeight: "600",
                  borderBottom: isActive ? "2px solid green" : "",
                })}
                className={navItem}
              >
                Our Portfolio
              </NavLink>
              <NavLink
                to="team"
                style={({ isActive }) => ({
                  fontWeight: "600",
                  borderBottom: isActive ? "2px solid green" : "",
                })}
                className={navItem}
              >
                Our Team
              </NavLink>
              <NavLink
                to="dashboard"
                style={({ isActive }) => ({
                  fontWeight: "600",
                  borderBottom: isActive ? "2px solid green" : "",
                })}
                className={navItem}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="contact"
                style={({ isActive }) => ({
                  fontWeight: "600",
                  borderBottom: isActive ? "2px solid green" : "",
                })}
                className={navItem}
              >
                Contact Us
              </NavLink>

              <Link className="navButton" to="login">
                <Button color="inherit">Login</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* resopnsive dawer  */}
      <Box>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNavItem} to="/">
                      Home
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNavItem} to="portfolio">
                      Our Portfolio
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNavItem} to="team">
                      Our Team
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNavItem} to="contact">
                      Contact Us
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                  <ListItemText>
                    <Link className={mobileNavItem} to="login">
                      Log In
                    </Link>
                  </ListItemText>
                </ListItem>
                <Divider />
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      </Box>
    </Box>
  );
};

export default Navbar;
