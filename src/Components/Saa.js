import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Aika from "./Aika.js";

const Saa = () => {
  const [saa, setSaa] = useState(null);
  const [naytaSaa, setNaytaSaa] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=60.46&longitude=22.69&hourly=temperature_2m,relativehumidity_2m,rain,weathercode,windspeed_10m&current_weather=true&forecast_days=1&timezone=Europe%2FMoscow"
      );
      const data = await response.json();
      setSaa(data.current_weather);
    };
    fetchData();
  }, []);

  if (!saa) {
    return <Box>Lataillaan...</Box>;
  }

  let koodiSaaksi;
  switch (saa.weathercode) {
    case 0:
      koodiSaaksi = "Clear sky";
      break;
    case 1:
    case 2:
    case 3:
      koodiSaaksi = "Mainly clear, partly cloudy, and overcast";
      break;
    case 45:
    case 48:
      koodiSaaksi = "Fog and depositing rime fog";
      break;
    case 51:
    case 53:
    case 55:
      koodiSaaksi = "Drizzle: Light, moderate, and dense intensity";
      break;
    case 56:
    case 57:
      koodiSaaksi = "Freezing Drizzle: Light and dense intensity";
      break;
    case 61:
    case 63:
    case 65:
      koodiSaaksi = "Rain: Slight, moderate and heavy intensity";
      break;
    case 66:
    case 67:
      koodiSaaksi = "Freezing Rain: Light and heavy intensity";
      break;
    case 71:
    case 73:
    case 75:
      koodiSaaksi = "Snow fall: Slight, moderate, and heavy intensity";
      break;
    case 77:
      koodiSaaksi = "Snow grains";
      break;
    case 80:
    case 81:
    case 82:
      koodiSaaksi = "Rain showers: Slight, moderate, and violent";
      break;
    case 85:
    case 86:
      koodiSaaksi = "Snow showers slight and heavy";
      break;
    case 95:
      koodiSaaksi = "Thunderstorm: Slight or moderate";
      break;
    case 96:
    case 99:
      koodiSaaksi = "Thunderstorm with slight and heavy hail";
      break;
    default:
      koodiSaaksi = "Unknown";
  }

  return (
    <Box
      style={{
        position: "fixed",
        bottom: "10%",
        width: "100%",
        display: "flex",
        justifyContent: "left",
      }}
    >
      <Button
        variant={naytaSaa ? "outlined" : "contained"}
        onClick={() => setNaytaSaa((naytaSaa) => !naytaSaa)}
        style={{ marginRight: 20 }}
      >
        Sää
      </Button>

      <motion.div
        animate={{
          x: [0, 200, 0],
          opacity: naytaSaa ? 0 : 1,
        }}
        transition={{
          x: { duration: 10, ease: "easeInOut", repeat: Infinity },
          opacity: { duration: 1, ease: "easeInOut" },
        }}
      >
        <Box
          width="auto"
          height="auto"
          border={1}
          borderColor="primary.main"
          padding={5}
        >
          <Typography>
            Kello on <Aika />{" "}
          </Typography>
          <Typography>Sää on päivitetty: {saa.time.slice(-5)}</Typography>
          <Typography>Lämpötila: {saa.temperature}</Typography>
          <Typography>Sää: {koodiSaaksi}</Typography>
          <Typography>Tuulen nopeus: {saa.windspeed} m/s</Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Saa;
