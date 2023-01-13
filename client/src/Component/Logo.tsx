import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Logo() {
  return (
    <Box sx={{ marginTop: "64px", height: "200px", color: "white" }}>
      <Typography variant="h1" component="div" sx={{ textAlign: "center" }}>
        The Boys API
      </Typography>
    </Box>
  );
}

export default Logo;
