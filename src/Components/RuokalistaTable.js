import * as React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import "../Components/tableStyles.css";
import Tahdet from "./Tahdet.js";
import PoistaRivi from "./VarmistaPoisto.js"
import MuokkaaRivi from "../Components/MuokkaaRivi"

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

function RuokalistaTable() {
  const [searchText, setSearchText] = React.useState("");
  const [ruoat, setRuoat] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/ruoka/all")
      .then((response) => {
        setRuoat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          sx={{ width: "fit-content", minWidth: "600px" }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className="header-cell">Ruoka</TableCell>
                <TableCell className="header-cell">Päivämäärä</TableCell>
                <TableCell className="header-cell">Kellonaika</TableCell>
                <TableCell className="header-cell">Lisätiedot</TableCell>
                <TableCell className="header-cell">Tähdet</TableCell>
                <TableCell/>
              </TableRow>
            </TableHead>

            <TableBody>
              {ruoat
                .filter(
                  (row) =>
                    row.nimi.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.pvm.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.aika.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.lisatiedot.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.nimi}</TableCell>
                    <TableCell>{row.pvm}</TableCell>
                    <TableCell>{row.aika}</TableCell>
                    <TableCell>{row.lisatiedot}</TableCell>
                    <TableCell>
                      <Tahdet value={row.tahdet} />
                    </TableCell>
                    <TableCell>

                      <MuokkaaRivi />
                      <PoistaRivi id={row.id} reitti="ruoka" />

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

export default RuokalistaTable;
