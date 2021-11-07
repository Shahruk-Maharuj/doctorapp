import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <NavLink
            to="/appoinment"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <Button
              sx={{ pt: 1.5, pb: 1.5, pr: 3, pl: 3, borderRadius: 0 }}
              style={{
                background:
                  "linear-gradient(90deg, rgba(25,211,174,1) 0%, rgba(15,207,236,1) 100%)",
                boxShadow: "none",
              }}
              variant="text"
            >
              Appoinment
            </Button>
          </NavLink>
          {user?.email ? (
            <NavLink
              onClick={logOut}
              to="/logout"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Button color="inherit">Logout</Button>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
