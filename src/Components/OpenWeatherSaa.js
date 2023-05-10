import ReactWeather, { useOpenWeather } from "react-open-weather";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import backgroundb from "../Media/backgroundb.png";
import { motion } from "framer-motion";

const customStyles = {
  fontFamily: "Castoro Titling",
  gradientStart: "rgba(1, 126, 190, 1)",
  gradientMid: "rgba(4, 167, 249, 1)",
  gradientEnd: "rgba(75, 196, 247, 1)",
  locationFontColor: "#FFF",
  todayTempFontColor: "#FFF",
  todayDateFontColor: "#B5DEF4",
  todayRangeFontColor: "#B5DEF4",
  todayDescFontColor: "#B5DEF4",
  todayInfoFontColor: "#B5DEF4",
  todayIconColor: "#FFF",
  forecastBackgroundColor: "rgba(255, 255, 255, 0)",
  forecastSeparatorColor: "#DDD",
  forecastDateColor: "#81c784",
  forecastDescColor: "#81c784",
  forecastRangeColor: "#81c784",
  forecastIconColor: "#777",
};

const OpenWeatherSaa = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "API_KEY",
    lat: "60.451640592108525",
    lon: "22.6922109226697",
    lang: "fi",
    unit: "metric",
  });

  const [naytaBoxi, setNaytaBoxi] = useState(false);
  const [showForecast, setShowForecast] = useState(false);

  const handleClick = () => {
    setNaytaBoxi(!naytaBoxi);
    setShowForecast(!showForecast);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        mt: "50px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundImage: `url(${backgroundb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        minWidth: "400px",
        maxWidth: "700px",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <motion.div
        className="box"
        animate={{
          y: naytaBoxi ? 0 : 100,
        }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
        onClick={handleClick}
      >
        <ReactWeather
          theme={customStyles}
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="fi"
          locationLabel="Paimio"
          unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
          showForecast={showForecast}
        />
      </motion.div>

      <Box style={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: -300,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {!naytaBoxi && <h1>Sää</h1>}
        </Box>
      </Box>
    </Box>
  );
};
export default OpenWeatherSaa;
