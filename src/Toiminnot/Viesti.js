import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import backgroundb from "../Media/backgroundb.png";
import Modal from "@mui/material/Modal";

function Viesti({ viesti }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (viesti) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [viesti]);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Paper
        sx={{
          width: 250,
          height: 100,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundImage: `url(${backgroundb})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
          {viesti}
        </Typography>
      </Paper>
    </Modal>
  );
}

export default Viesti;
