import "../Components/tableStyles.css";
import { unet } from "../Components/Tiedot.js";
import * as React from "react";
import {
  InputAdornment,
  TableCell,
  TableHead,
  Table,
  Paper,
  TableRow,
  TableBody,
  TableContainer,
  Box,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function UnilistaTable() {
  const [searchText, setSearchText] = React.useState("");
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
                <TableCell className="header-cell">laatu</TableCell>
                <TableCell className="header-cell">lisatiedot</TableCell>
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
