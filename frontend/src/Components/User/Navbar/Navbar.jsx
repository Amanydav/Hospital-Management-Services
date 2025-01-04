import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/Loginslice";
import logo from "../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.login);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);

  const item = localStorage.getItem("jwt");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/"
            onClick={toggleDrawer}
            sx={{
              color: "black",
              "&:hover": {
                color: "blue",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/contact"
            onClick={toggleDrawer}
            sx={{
              color: "black",
              "&:hover": {
                color: "blue",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/about"
            onClick={toggleDrawer}
            sx={{
              color: "black",
              "&:hover": {
                color: "blue",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/doctor"
            onClick={toggleDrawer}
            sx={{
              color: "black",
              "&:hover": {
                color: "blue",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemText primary="Doctors" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/services"
            onClick={toggleDrawer}
            sx={{
              color: "black",
              "&:hover": {
                color: "blue",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            component={Link}
            to="/ambulance-booking"
            onClick={toggleDrawer}
            sx={{
              color: "black",
              "&:hover": {
                color: "blue",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemText primary="Ambulance" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {item ? (
        <List>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/appointment"
              onClick={toggleDrawer}
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemText primary="Appointment" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/userprofile"
              onClick={toggleDrawer}
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/login"
              onClick={toggleDrawer}
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemText primary="Login as User" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/doctorlogin"
              onClick={toggleDrawer}
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemText primary="Login as Doctor" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/SignUp"
              onClick={toggleDrawer}
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <>
      <AppBar sx={{ background: "#f3f7eb", position: "sticky", top: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton component={Link} to="/" sx={{ p: 0 }}>
            <img
              src={logo}
              alt="logo"
              style={{
                borderRadius: "50%",
                width: 60,
                height: 60,
              }}
            />
          </IconButton>

          {/* Mobile View */}
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop View */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/contact"
              color="inherit"
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              Contact
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/doctor"
              color="inherit"
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              Doctors
            </Button>
            <Button
              component={Link}
              to="/services"
              color="inherit"
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              Services
            </Button>
            <Button
              component={Link}
              to="/ambulance-booking"
              color="inherit"
              sx={{
                color: "black",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              Ambulance
            </Button>
            {item ? (
              <Tooltip title={localStorage.getItem("user")}>
                <Button onClick={handleClick}>
                  <Avatar />
                </Button>
              </Tooltip>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  color="inherit"
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "blue",
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/SignUp"
                  variant="outlined"
                  color="primary"
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "blue",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/userprofile">
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Navbar;
