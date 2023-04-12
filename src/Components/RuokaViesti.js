import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import backgroundb from "../Media/backgroundb.png";

function RuokaViesti({ viesti }) {
  return (
    <Paper
      sx={{
        backgroundImage: `url(${backgroundb})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "auto",
        margin: "auto",
        boxShadow: "none",
      }}
    >
      <Typography
        sx={{ textAlign: "center", marginTop: viesti ? "1rem" : "0" }}
      >
        {viesti}
      </Typography>
    </Paper>
  );
}

export default RuokaViesti;
