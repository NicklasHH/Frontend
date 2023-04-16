import { useState } from "react";
import RuokaViesti from "./RuokaViesti.js";
import backgroundb from "../Media/backgroundb.png";
import CreateIcon from "@mui/icons-material/Create";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import {
  Slide,
  IconButton,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Rating,
} from "@mui/material";

const styles = {
  root: {
    backgroundImage: `url(${backgroundb})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "10px",
    margin: "10px",
    width: "270px",
    height: "128px",
  },
};

function RuokalomakeMUI() {
  const [values, setValues] = useState({
    nimi: "",
    pvm: "",
    aika: "",
    lisatietoja: "",
    tahdet: 0,
  });
  const [viesti, setViesti] = useState("");
  const [showFields, setShowFields] = useState(false);

  // Funktio muiden kuin ensimmäisen rivien näyttämiselle
  const handleNimiChange = (e) => {
    setValues({
      ...values,
      nimi: e.target.value,
    });
    if (e.target.value === "") {
      setShowFields(false);
    } else {
      setShowFields(true);
    }
  };

  // Funktio painikkeen painallukselle
  const lisaaRuoka = (e) => {
    e.preventDefault();
    setViesti("Ruoka lisätty");
    setTimeout(() => {
      setViesti("");
    }, 5000);
    

    setTimeout(() => {
      setValues({
        nimi: "",
        pvm: "",
        aika: "",
        lisatietoja: "",
        tahdet: 0,
      });
      setShowFields(false);
    }, 2000);
  };

  const handleTahdetChange = (e, newValue) => {
    setValues({
      ...values,
      tahdet: newValue,
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
            to="/ruoka"
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
            Lisää ruoka
          </Typography>

          <TextField
            sx={{ mb: 1 }}
            label="Ruoan nimi:"
            name="nimi"
            onChange={handleNimiChange}
            value={values.nimi}
          />
          <Slide direction="right" in={showFields} style={{transitionDuration: '2s'}}>
            <Paper
              sx={{
                backgroundImage: `url(${backgroundb})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "10px",
                margin: "-10px",
                width: "auto",
              }}
            >
              <Box>
                <TextField sx={{ mb: 1 }} label="Päivämäärä: " name="pvm" />

                <TextField sx={{ mb: 1 }} label="Aika: " name="aika" />

                <TextField
                  sx={{ mb: 1 }}
                  label="Lisätietoja: "
                  name="lisatietoja"
                />

                <Box
                  sx={{
                    border: 1,
                    borderRadius: "4px",
                    padding: "15px",
                    display: "flex",
                    borderColor: "#565957",
                  }}
                >
                  <Rating
                    name="tahdet"
                    value={values.tahdet}
                    onChange={handleTahdetChange}
                  />
                </Box>

                <Button
                  onClick={(e) => lisaaRuoka(e)}
                  variant="contained"
                  sx={{ marginRight: 3, mt: 2, fontSize: "13px" }}
                  startIcon={<CreateIcon />}
                >
                  Lisää
                </Button>
              </Box>
            </Paper>
          </Slide>
        </Box>

        <RuokaViesti viesti={viesti} />
      </Paper>
    </Grid>
  );
}

export default RuokalomakeMUI;
