import { useState } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";

function Dialogi({ open, onClose, onDelete, id, reitti }) {
  const handleDelete = () => {
    onDelete(id);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Haluatko varmasti poistaa rivin tiedot?</DialogTitle>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button onClick={onClose}>Peruuta</Button>
        <Button
          onClick={() => {
            handleDelete();
            window.location.reload();
          }}
          variant="contained"
          sx={{
            backgroundColor: "#690000",
            color: "#fff",
            "&:hover": { backgroundColor: "#ff0000" },
          }}
        >
          Poista
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function PoistaRivi({ id, reitti }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    axios
      .get(`http://localhost:8080/${reitti}/delete/${id}`)
      .then((response) => {
        console.log(response);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteOutlineOutlinedIcon
          fontSize="small"
          sx={{ color: "#690000", "&:hover": { color: "#ff0000" } }}
        />
      </IconButton>
      <Dialogi
        open={open}
        onClose={handleClose}
        onDelete={handleDelete}
        id={id}
        route={reitti}
      />
    </>
  );
}
