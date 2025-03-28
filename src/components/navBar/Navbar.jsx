import React, { useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  InputBase,
  Toolbar,
  Box,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { FiSearch } from "react-icons/fi";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { CiDark, CiLight } from "react-icons/ci";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className="customeAppBar">
      <AppBar position="static" className="appBar">
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
          >
            <img src="/assets/myLogo.png" alt="Logo" className="logoNav" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "2px solid var(--secondary-color)",
                borderRadius: "25px",
                width: "350px",
                backgroundColor: "var(--white-color)",
              }}
            >
              <InputBase
                sx={{
                  padding: "8px 25px",
                  flexGrow: 1,
                  fontSize: "14px",
                  color: "var(--primary-color)",
                }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton
                sx={{ padding: "10px", color: "var(--secondary-color)" }}
              >
                <FiSearch />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Language">
              <IconButton
                sx={{
                  color: "var(--primary-color)",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={isDarkMode ? "Light Mode" : "Dark Mode"}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: "var(--primary-color)",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                {isDarkMode ? <CiLight /> : <CiDark />}
              </IconButton>
            </Tooltip>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="medium"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    alt="Alaa Alfaqawi"
                    src="/assets/alaaPicture.jpg"
                    sx={{
                      bgcolor: "blue",
                      border: "2px solid var(--primary-color)",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Box>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar
                  alt="Alaa Alfaqawi"
                  src="/assets/alaaPicture.jpg"
                  sx={{
                    bgcolor: "blue",
                    border: "2px solid var(--primary-color)",
                  }}
                />{" "}
                My Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon
                    fontSize="small"
                    sx={{
                      color: "var(--primary-color)",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  />
                </ListItemIcon>
                Settings
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
