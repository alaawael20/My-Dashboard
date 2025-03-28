import React from "react";
import { Box, Grid } from "@mui/material";
import SideBar from "../components/sideBar/SideBar";
import Navbar from "../components/navBar/Navbar";

const Dashboard = () => {
  return (
    <Grid container spacing={2} sx={{ my: "30px" }}>
      <Grid size={2}>
        <Box>
          <SideBar />
        </Box>
      </Grid>
      <Grid size={10}>
        <Box>
          <Navbar />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
