import React, { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, Box } from "@mui/material";

function GoogleSearch() {
  const [searchText, setSearchText] = useState("");
  const searchFieldRef = useRef(null);

  const handleSearch = () => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchText)}`,
      "_blank"
    );
    setSearchText("");
    searchFieldRef.current.blur();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSearchText("");
    }, 250);
  };

  return (
    <Box>
      <TextField
        label={
          <span>
            <span style={{ color: "#4285f4" }}>G</span>
            <span style={{ color: "#ea4335" }}>o</span>
            <span style={{ color: "#fbbc05" }}>o</span>
            <span style={{ color: "#4285f4" }}>g</span>
            <span style={{ color: "#34a853" }}>l</span>
            <span style={{ color: "#ea4335" }}>e</span>
            <span style={{ color: "#c0c5c0" }}>-haku</span>
          </span>
        }
        variant="outlined"
        size="small"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        onKeyPress={handleKeyPress}
        inputRef={searchFieldRef} // Aseta ref TextField-komponenttiin
        onBlur={handleBlur}
        InputProps={{
          placeholder: "Haku toimii myös enterillä",
          endAdornment: (
            <IconButton color="primary" type="submit" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}

export default GoogleSearch;
