import * as React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import axios from "axios";
import Tahdet from "./Tahdet.js";
import backgroundb from "../Media/backgroundb.png";

import Zoom from "react-reveal/Zoom";

function Etusivu() {
  const [ruoka, setRuoka] = React.useState({});
  const [uni, setUni] = React.useState({});

  React.useEffect(() => {
    // hae viimeisin ruoka
    axios
      .get("http://localhost:8080/ruoka/uusin")
      .then((response) => {
        setRuoka(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // hae viimeisin uni
    axios
      .get("http://localhost:8080/uni/uusin")
      .then((response) => {
        setUni(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Zoom left bottom>
        <Card
          sx={{
            size: "auto",
            margin: 2,
            backgroundImage: `url(${backgroundb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5">Viimeisin ruoka:</Typography>
            <Typography>Nimi: {ruoka.nimi}</Typography>
            <Typography>Päivämäärä: {ruoka.pvm}</Typography>
            <Typography>Kellonaika: {ruoka.aika}</Typography>
            <Typography>Lisätiedot: {ruoka.lisatiedot}</Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Tähdet:</Typography>

              <Box sx={{ display: "inline-block", ml: 1 }}>
                <Tahdet value={ruoka.tahdet} />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Zoom>

      <Zoom right bottom>
        <Card
          sx={{
            size: "auto",
            margin: 2,
            backgroundImage: `url(${backgroundb})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardContent>
            <Typography variant="h5">Viimeisin uni:</Typography>
            <Typography>Määrä: {uni.maara}h</Typography>
            <Typography>Päivämäärä: {uni.pvm}</Typography>
            <Typography>laatu: {uni.laatu}</Typography>
            <Typography>Lisätiedot: {uni.lisatiedot}</Typography>
          </CardContent>
        </Card>
      </Zoom>
    </Box>
  );
}

export default Etusivu;
