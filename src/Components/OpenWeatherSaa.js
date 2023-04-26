import ReactWeather, { useOpenWeather } from 'react-open-weather';
import Box from "@mui/material/Box";
import backgroundb from "../Media/backgroundb.png";

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
    key: "6f1836cce592cb0cfea746a9cb4e2369",
    lat: "60.451640592108525",
    lon: "22.6922109226697",
    lang: "fi",
    unit: "metric",
  });
  return (
    <Box
      sx={{
        m: 10,
        backgroundImage: `url(${backgroundb})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
      }}
    >
      <ReactWeather
        theme={customStyles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="fi"
        locationLabel="Paimio"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </Box>
  );
};
export default OpenWeatherSaa;
