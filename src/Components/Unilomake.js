import backgroundb from "../Media/backgroundb.png";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
import Viesti from "../Toiminnot/Viesti.js";
import { unenlaatu } from "../Toiminnot/Tiedot.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
  const [viesti, setViesti] = useState("");

  const luoUni = (uni) => {
    axios
      .post("http://localhost:8080/uni/add", uni)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [values, setValues] = useState({
    maara: "",
    pvm: "",
    laatu: "",
    lisatiedot: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };


  // Funktio painikkeen painallukselle
  const lisaaUni = (e) => {
    e.preventDefault();
    luoUni(values);
    setViesti("Uni lisätty");
    setTimeout(() => {
      setViesti("");
    }, 5000);

    setTimeout(() => {
      setValues({
        maara: "",
        pvm: "",
        laatu: "",
        lisatiedot: "",
      });
    }, 2000);
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

          <TextField
            sx={{ mb: 1 }}
            label="Unen määrä: "
            name="maara"
            required
            inputProps={{ type: "number", inputMode: "numeric" }}
            onChange={handleChange}
            value={values.maara}
          />
          <TextField sx={{ mb: 1 }} label="Päivämäärä: " name="pvm" onChange={handleChange} value={values.pvm}/>

          <TextField
            sx={{ mb: 1 }}
            defaultValue=""
            label="Unenlaatu:"
            name="laatu"
            select
            onChange={handleChange}
            value={values.laatu}
          >
            {unenlaatu.map((option) => (
              <MenuItem key={option.value} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField label="Lisätietoja: " name="lisatiedot" onChange={handleChange} value={values.lisatiedot}/>

          <Box sx={{ textAlign: "left" }}>
            <Button
              onClick={(e) => {
                lisaaUni(e);
              }}
              variant="contained"
              sx={{ marginRight: 3, mt: 2, fontSize: "13px" }}
              startIcon={<CreateIcon />}
            >
              Tallenna
            </Button>
          </Box>
        </Box>

        <Viesti viesti={viesti} />
      </Paper>
    </Grid>
  );
}
export default UnilomakeMUI;
