import { useState } from "react";
import { IconButton, Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

function Dialogi({ open, onClose, onDelete }) {
  const handleMuokkaa = () => {
    onDelete();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Haluatko muokata rivin tietoja</DialogTitle>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button onClick={onClose}>En</Button>
        <Button onClick={handleMuokkaa} variant="contained" sx={{ backgroundColor: "#00008b", color: "#fff", "&:hover": { backgroundColor: "#1a8cd8" } }}>Kyllä</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function MuokkaaRivi() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMuokkaa = () => {
    // muokkaus setti tässä
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
      <EditOutlinedIcon fontSize="small" sx={{ color: "#00008b", "&:hover": { color: "#1a8cd8" }}}/>
      </IconButton>
      <Dialogi open={open} onClose={handleClose} onDelete={handleMuokkaa} />
    </>
  );
}
