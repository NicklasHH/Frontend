import { Typography, Box, Grid, Paper, TextField, Button } from "@mui/material";

import { useState } from "react";

const styles = {
  root: {
    margin: "10px",
    width: "270px",
    height: "300px",
    textAlign: "center",
  },
};

function Kirjaudu() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  function containsNumbers(str) {
    return /\d/.test(str);
  }
  const [viesti, setViesti] = useState("");

  // Funktio painikkeen painallukselle
  const kirjaudu = (e) => {
    setViesti("Sisäänkirjaus onnistui!");
    e.preventDefault();
    const username = values.username;
    const password = values.password;

    // tarkista onko tyhjät
    if (username === "" && password === "") {
      setViesti("Syötä käyttäjätunnus ja salasana");
      return;
    }

    if (username === "") {
      setViesti("Syötä käyttäjätunnus");
      return;
    }
    if (username.length < 4) {
      setViesti("Käyttäjätunnus on vähintään 4 merkkiä pitkä");
      return;
    }
    if (username.length > 10) {
      setViesti("Käyttäjätunnus on enintään 10 merkkiä pitkä");
      return;
    }

    if (password === "") {
      setViesti("Syötä salasana");
      return;
    }
    if (password.length < 6) {
      setViesti("Salasana on vähintään 4 merkkiä pitkä");
      return;
    }
    if (containsNumbers(password) === false)
      setViesti("Salasanassa on oltava numero");
    return;
  };

  return (
    <Grid container justifyContent="center">
      <Paper sx={styles.root}>
        <h2>Kirjaudu sisään</h2>

        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { marginBottom: 2, width: 250 } }}
        >
          <TextField
            label="Käyttäjätunnus"
            name="username"
            value={values.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
            required
          />{" "}
          <br />
          <TextField
            label="Salasana"
            name="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            required
          />{" "}
          <br />
          <Button
            onClick={(e) => kirjaudu(e)}
            variant="contained"
            sx={{ fontWeight: "bold" }}
          >
            Kirjaudu
          </Button>
        </Box>
        <Typography sx={{ marginTop: 1, color: "red" }}>{viesti}</Typography>
      </Paper>
    </Grid>
  );
}
export default Kirjaudu;
