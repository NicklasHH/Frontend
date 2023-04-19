import { useState, useEffect } from "react";
import { unenlaatu } from "../Toiminnot/Tiedot.js";
import backgroundb from "../Media/backgroundb.png";
import {
  Paper,
  MenuItem,
  TextField,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import axios from "axios";

const styles = {
  root: {
    backgroundImage: `url(${backgroundb})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "10px",
    width: "240px",
  },
};

function Dialogi({ open, onClose, onEdit, id }) {
  const [maara, setMaara] = useState("");
  const [pvm, setPvm] = useState("");
  const [laatu, setLaatu] = useState("");
  const [lisatiedot, setLisatiedot] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/uni/one/${id}`)
      .then((response) => {
        setMaara(response.data.maara);
        setPvm(response.data.pvm);
        setLaatu(response.data.laatu);
        setLisatiedot(response.data.lisatiedot);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEdit = () => {
    const data = {
      maara: maara,
      pvm: pvm,
      laatu: laatu,
      lisatiedot: lisatiedot,
    };
    axios
      .put(`http://localhost:8080/uni/muokkaa/${id}`, data)
      .then((response) => {
        console.log(response);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Paper sx={{ ...styles.root }}>
        <DialogTitle>Muokkaa unitietoja</DialogTitle>

        <TextField
          sx={{ mb: 1 }}
          label="Unen määrä: "
          name="maara"
          required
          fullWidth
          inputProps={{ type: "number", inputMode: "numeric" }}
          value={maara}
          onChange={(e) => setMaara(e.target.value)}
        />
        <TextField
          sx={{ mb: 1 }}
          label="Päivämäärä: "
          name="pvm"
          value={pvm}
          fullWidth
          onChange={(e) => setPvm(e.target.value)}
        />
        <TextField
          sx={{ mb: 1 }}
          defaultValue=""
          label="Unenlaatu:"
          name="laatu"
          select
          fullWidth
          value={laatu}
          onChange={(e) => setLaatu(e.target.value)}
        >
          {unenlaatu.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Lisätietoja: "
          name="lisatiedot"
          fullWidth
          value={lisatiedot}
          onChange={(e) => setLisatiedot(e.target.value)}
        />

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={onClose}
            sx={{
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#ff0000", color: "#FFFFFF" },
            }}
          >
            Poistu
          </Button>
          <Button
            onClick={() => {
              handleEdit();
            }}
            sx={{
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#07F000", color: "#FFFFFF" },
            }}
          >
            Tallenna
          </Button>
        </DialogActions>
      </Paper>
    </Dialog>
  );
}

export default function MuokkaaUni({ id }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    axios
      .get(`http://localhost:8080/uni/muokkaa/${id}`)
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
        <EditOutlinedIcon
          fontSize="small"
          sx={{ color: "#FFFE91", "&:hover": { color: "#07F000" } }}
        />
      </IconButton>
      <Dialogi open={open} onClose={handleClose} onEdit={handleEdit} id={id} />
    </>
  );
}
