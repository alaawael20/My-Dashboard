import React from "react";
import { Box, Grid } from "@mui/material";
import SideBar from "../components/sideBar/SideBar";

const Dashboard = () => {
  return (
    <Grid container spacing={2} sx={{ my: "30px" }}>
      <Grid size={3}>
        <Box>
          <SideBar />
        </Box>
      </Grid>
      <Grid size={9}>
        <Box>Contant</Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
