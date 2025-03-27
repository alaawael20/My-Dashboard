import { Box, Grid } from "@mui/material";
import React from "react";

const SideBar = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ minHeight: "90vh" }}
      spacing={2}
    >
      <Grid item>
        <Box>1</Box>
      </Grid>
      <Grid item>
        <Box>2</Box>
      </Grid>
      <Grid item>
        <Box>3</Box>
      </Grid>
    </Grid>
  );
};

export default SideBar;
