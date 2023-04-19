import "../Css/tableStyles.css";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import PoistaRivi from "./VarmistaPoisto.js";
import MuokkaaUni from "./MuokkaaUni.js";
import {
  TextField,
  InputAdornment,
  TableCell,
  TableHead,
  Table,
  Paper,
  TableRow,
  TableBody,
  TableContainer,
  Box,
} from "@mui/material";



function UnilistaTable() {
  const [searchText, setSearchText] = React.useState("");
  const [unet, setUnet] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/uni/all")
      .then((response) => {
        setUnet(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    });
    
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ m: 2 }}>
        <TextField
          sx={{ mb: 1 }}
          size="small"
          label="Hae"
          name="haku"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <TableContainer
          component={Paper}
          sx={{ width: "fit-content", minWidth: "460px" }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className="header-cell">Määrä</TableCell>
                <TableCell className="header-cell">Päivämäärä</TableCell>
                <TableCell className="header-cell">Laatu</TableCell>
                <TableCell className="header-cell">Lisätiedot</TableCell>
                <TableCell>muokkaa/poista</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {unet
                .filter(
                  (row) =>
                    row.maara
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    row.pvm.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.laatu
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    row.lisatiedot
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                )
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.maara}H </TableCell>
                    <TableCell>{row.pvm}</TableCell>
                    <TableCell>{row.laatu}</TableCell>
                    <TableCell>{row.lisatiedot}</TableCell>
                    <TableCell>
                      <MuokkaaUni id={row.id} />

                      <PoistaRivi id={row.id} reitti="uni" />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
export default UnilistaTable;
