import { useState } from "react";
import { munTiedot } from "./Tiedot.js";
import {
  Card,
  CardHeader,
  CardContent,
  Stack,
  Button,
  TextField,
} from "@mui/material";


function OmatTiedot() {
  const [tiedot, setTiedot] = useState(munTiedot);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTiedot((prevTiedot) => ({
      ...prevTiedot,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tiedot);
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Card sx={{ width: "300px", height: "auto", margin: 5 }}>
        <CardHeader title={"Terve " + munTiedot.tunnus.toUpperCase() + "!"} />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ mb: 1 }}
              fullWidth
              name="enimi"
              label="Etunimi"
              value={tiedot.enimi}
              onChange={handleChange}
            />
            <TextField
              sx={{ mb: 1 }}
              fullWidth
              name="snimi"
              label="Sukunimi"
              value={tiedot.snimi}
              onChange={handleChange}
            />
            <TextField
              sx={{ mb: 1 }}
              fullWidth
              name="email"
              label="Sähköposti"
              value={tiedot.email}
              onChange={handleChange}
            />
            <TextField
              sx={{ mb: 1 }}
              fullWidth
              name="puh"
              label="Puhelin"
              value={tiedot.puh}
              onChange={handleChange}
            />
            <Button type="submit">Tallenna tiedot</Button>
          </form>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default OmatTiedot;
