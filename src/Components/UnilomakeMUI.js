import backgroundb from "../Media/backgroundb.png";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
import { unenlaatu } from "../Components/Tiedot.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
} from "@mui/material";

const styles = {
  root: {
    backgroundImage: `url(${backgroundb})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "10px",
    margin: "10px",
    width: "270px",
  },
};

function UnilomakeMUI() {
  const [setValues] = useState({
    maara: "",
    pvm: "",
    laatu: "",
    lisatietoja: "",
  });

  const [viesti, setViesti] = useState("");

  // Funktio painikkeen painallukselle
  const lisaaUni = (e) => {
    e.preventDefault();
    setViesti("Uni lisätty");
    setValues({
      maara: "",
      pvm: "",
      laatu: "",
      lisatietoja: "",
    });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: 5 }}
    >
      <Paper sx={{ ...styles.root, position: "relative" }}>
        <Box component="form" sx={{ "& .MuiTextField-root": { width: 250 } }}>
          <IconButton
            component={Link}
            to="/uni"
            sx={{ position: "absolute", top: -20, right: -20 }}
          >
            <CloseIcon color="pun" sx={{ "&:hover": { color: "#690000" } }} />
          </IconButton>

          <Typography
            sx={{
              textAlign: "center",
              mb: 1,
              fontSize: "24px",
              color: "#81c784",
            }}
          >
            Lisää uni
          </Typography>

          <TextField sx={{ mb: 1 }} label="Unen määrä: " name="nimi" required />
          <TextField sx={{ mb: 1 }} label="Päivämäärä: " name="pvm" />

          <TextField
            sx={{ mb: 1 }}
            defaultValue=""
            label="Unenlaatu:"
            name="unenlaatu"
            select
          >
            {unenlaatu.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField label="Lisätietoja: " name="lisatietoja" />

          <Box sx={{ textAlign: "left" }}>
            <Button
              onClick={(e) => lisaaUni(e)}
              variant="contained"
              sx={{ marginRight: 3, mt: 2, fontSize: "13px" }}
              startIcon={<CreateIcon />}
            >
              Lisää
            </Button>
          </Box>
        </Box>

        <Typography
          sx={{ textAlign: "center", marginTop: viesti ? "1rem" : "0" }}
        >
          {viesti}
        </Typography>
      </Paper>
    </Grid>
  );
}
export default UnilomakeMUI;
