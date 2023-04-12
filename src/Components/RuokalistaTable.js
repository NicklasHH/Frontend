import "../Components/tableStyles.css";
import { ruoat } from "../Components/Tiedot.js";
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

function RuokalistaTable() {
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
          sx={{ width: "fit-content", minWidth: "600px" }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className="header-cell">Ruoka</TableCell>
                <TableCell className="header-cell">Päivämäärä</TableCell>
                <TableCell className="header-cell">Kellonaika</TableCell>
                <TableCell className="header-cell">lisatiedot</TableCell>
                <TableCell className="header-cell">Tähdet</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {ruoat
                .filter(
                  (row) =>
                    row.ruoka
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    row.pvm.toLowerCase().includes(searchText.toLowerCase()) ||
                    row.kellonaika
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    row.lisatiedot
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                )
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.ruoka}</TableCell>
                    <TableCell>{row.pvm}</TableCell>
                    <TableCell>{row.kellonaika}</TableCell>
                    <TableCell>{row.lisatiedot}</TableCell>
                    <TableCell>{row.tahdet}</TableCell>
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
