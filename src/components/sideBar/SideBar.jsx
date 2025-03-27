import { Avatar, Badge, Box, Grid, styled } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";
import { menuItems } from "./../../mock/menuItems";

const SideBar = () => {
  const location = useLocation();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ minHeight: "90vh" }}
      className="sideBar"
    >
      <Grid item>
        <Box>
          <Link to="/">
            <img src="/assets/myLogo.png" alt="Logo" className="logo" />
          </Link>
        </Box>
      </Grid>

      <Grid item>
        <Box>
          <Grid container direction="column" spacing={2} className="links">
            {menuItems.map(({ text, path, icon }) => (
              <Grid item key={text}>
                <Link
                  to={path}
                  className={`link ${
                    location.pathname === path ? "active" : ""
                  }`}
                >
                  <span className="icon">{icon}</span> {text}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>

      <Grid item>
        <Box
          display="flex"
          alignItems="center"
          gap={1.5}
          p={1.5}
          sx={{
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            boxShadow: "2px 2px 10px rgba(66, 66, 66, 0.1)",
            cursor: "pointer",
          }}
          className="avatar"
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Alaa Alfaqawi" src="/assets/alaaPicture.jpg" />
          </StyledBadge>
          <span style={{ fontWeight: "bold", color: "#333" }}>
            Alaa Al-Faqawi
          </span>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SideBar;
