import TopBar from "./Navigation/TopBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import RuokalomakeMUI from "./Components/RuokalomakeMUI";
import UnilomakeMUI from "./Components/UnilomakeMUI";
import RuokalistaTable from "./Components/RuokalistaTable";
import UnilistaTable from "./Components/UnilistaTable";
import OmatTiedot from "./Components/OmatTiedot";
import Etusivu from "./Components/Etusivu";
import Kirjaudu from "./Components/Kirjaudu";
import KirjauduUlos from "./Components/KirjauduUlos";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#81c784",
    },
    secondary: {
      main: "#A87880",
    },
    kolmas: {
      main: "#2B2B2B",
    },
    pun: {
      main: "#ff0000",
    },
    text: {
      primary: "#c5c5c5",
      secondary: "81c784",
    },
  },
  typography: {
    fontFamily: '"Shantell Sans"',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route path="/etusivu" element={<Etusivu />} />
            <Route path="profiili" element={<OmatTiedot />} />
            <Route path="kirjaudu" element={<Kirjaudu />} />
            <Route path="kirjauduUlos" element={<KirjauduUlos />} />
            <Route path="uni" element={<UnilistaTable />} />
            <Route path="ruoka" element={<RuokalistaTable />} />
            <Route path="lisaaUni" element={<UnilomakeMUI />} />
            <Route path="lisaaRuoka" element={<RuokalomakeMUI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
