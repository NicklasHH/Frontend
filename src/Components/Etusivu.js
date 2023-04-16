import * as React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import axios from "axios";
import Tahdet from "./Tahdet.js";
import backgroundb from "../Media/backgroundb.png";
import { motion } from "framer-motion";
import Saa from "./Saa.js";

function Etusivu() {
  const [ruoka, setRuoka] = React.useState({});
  const [clickRuoka, setClickRuoka] = React.useState(false);
  const [uni, setUni] = React.useState({});
  const [clickUni, setClickUni] = React.useState(false);

  const handleClickUni = () => {
    if (!clickRuoka) {
      setClickUni(!clickUni);
      setClickRuoka(false);
    }
  };

  const handleClickRuoka = () => {
    if (!clickUni) {
      setClickRuoka(!clickRuoka);
      setClickUni(false);
    }
  };

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
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          className="box"
          animate={{
            x: clickRuoka ? "50%" : 0,
            y: clickRuoka ? "75%" : 0,
            scale: clickRuoka ? 1.5 : 1,
            rotate: clickRuoka ? -720 : 0,
            opacity: clickUni ? 0 : 1,
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          onClick={handleClickRuoka}
        >
          <Card
            sx={{
              width: 250,
              height: 250,
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
        </motion.div>

        <motion.div
          className="box"
          animate={{
            x: clickUni ? "-50%" : 0,
            y: clickUni ? "75%" : 0,
            scale: clickUni ? 1.5 : 1,
            rotate: clickUni ? 720 : 0,
            opacity: clickRuoka ? 0 : 1,
          }}
          transition={{
            duration: 0.75,
          }}
          onClick={handleClickUni}
        >
          <Card
            sx={{
              width: 250,
              height: 250,
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
        </motion.div>
      </Box>

      <motion.div
      animate={{
        opacity: clickUni || clickRuoka ? 0 : 1,
      }}>

        <Saa />
      </motion.div>
    </Box>
  );
}

export default Etusivu;
