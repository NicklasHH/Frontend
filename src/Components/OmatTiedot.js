import { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import backgroundb from "../Media/backgroundb.png";
import {
  Alert,
  Typography,
  Box,
  IconButton,
  Slide,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Button,
  TextField,
} from "@mui/material";

function OmatTiedot() {
  const [tiedot, setTiedot] = useState({
    tunnus: "",
    enimi: "",
    snimi: "",
    email: "",
    puh: "",
  });
  const [tietojenTarkistus, setTietojenTarkistus] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [viesti, setViesti] = useState("");

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  // tallennus
  const handleTallennus = () => {
    axios
      .get("http://localhost:8080/tieto")
      .then((response) => {
        setTiedot(response.data[0]);
        setEditMode(false); 
        setTietojenTarkistus(false);
      })
      .catch((error) => {
        console.log(error);
      });
      setTimeout(() => {
        setViesti("");
      }, 5000);
  };
  
// edit(jos edit tehdään ilman tallennusta)
  useEffect(() => {
    if (!editMode) {
      axios
        .get("http://localhost:8080/tieto")
        .then((response) => {
          setTiedot(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [editMode]);

  // seurataan muutetaanko kenttien arvoja
  useEffect(() => {
    const tarkistaTiedot = async () => {
      const response = await axios.get("http://localhost:8080/tieto");
      const tietokannanTiedot = response.data[0];
      const tiedotTasmaavat =
        tiedot.enimi === tietokannanTiedot.enimi &&
        tiedot.snimi === tietokannanTiedot.snimi &&
        tiedot.email === tietokannanTiedot.email &&
        tiedot.puh === tietokannanTiedot.puh;
      setTietojenTarkistus(!tiedotTasmaavat); // muuta arvoa trueksi, jos tiedot eivät täsmää
    };
    tarkistaTiedot();
  }, [tiedot]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTiedot((prevTiedot) => ({
      ...prevTiedot,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/tieto/muokkaa`, tiedot)
      .then((response) => {
        setViesti(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Card
        sx={{
          width: "300px",
          height: "auto",
          margin: 5,
          backgroundImage: `url(${backgroundb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardHeader title={"Terve " + tiedot.tunnus.toUpperCase() + "!"} />
          <IconButton
            onClick={handleEditMode}
            color={editMode ? "primary" : "default"}
          >
            <EditIcon />
          </IconButton>
        </Box>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ mb: 1 }}
              fullWidth
              name="enimi"
              label="Etunimi"
              value={tiedot.enimi}
              onChange={handleChange}
              disabled={!editMode}
            />
            <TextField
              sx={{ mb: 1 }}
              fullWidth
              name="snimi"
              label="Sukunimi"
              value={tiedot.snimi}
              onChange={handleChange}
              disabled={!editMode}
            />
            <TextField
              sx={{ mb: 1 }}
              fullWidth
              name="email"
              label="Sähköposti"
              value={tiedot.email}
              onChange={handleChange}
              disabled={!editMode}
            />
            <TextField
              sx={{ mb: 1 }}
              fullWidth
              name="puh"
              label="Puhelin"
              value={tiedot.puh}
              onChange={handleChange}
              disabled={!editMode}
            />
            <Slide
              direction="right"
              in={tietojenTarkistus}
              style={{ transitionDuration: "0.8s" }}
            >
              <Button type="submit" onClick={handleTallennus}>
                Tallenna tiedot
              </Button>
              
            </Slide>
          </form>
        </CardContent>
      </Card>

      {viesti && <Alert severity="success">{viesti}</Alert>}

    </Stack>
  );
}

export default OmatTiedot;
