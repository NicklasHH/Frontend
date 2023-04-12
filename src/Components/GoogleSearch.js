import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, IconButton, Box } from "@mui/material";

function GoogleSearch() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchText)}`,
      "_blank"
    );
  };

  return (
    <Box style={{}}>
      <TextField
        label="Google haku"
        variant="outlined"
        size="small"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        InputProps={{
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
