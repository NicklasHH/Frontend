import { useState } from "react";
import { Link } from "react-router-dom";
import { ExpandMore, ExpandLess } from "@mui/icons-material/";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";

function LeftMenu() {
  const [openMenu, setOpenMenu] = useState();
  const [openUni, setOpenUni] = useState();
  const [openRuoka, setOpenRuoka] = useState();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setOpenRuoka(false);
    setOpenUni(false);
  };

  const toggleRuoka = () => {
    setOpenRuoka(!openRuoka);
  };

  const toggleUni = () => {
    setOpenUni(!openUni);
  };

  return (
    <Box>
      <IconButton color="primary" onClick={toggleMenu}>
        <MenuIcon sx={{ position: "fixed", fontSize: 40 }} />
      </IconButton>

      <Drawer anchor="left" open={openMenu} transitionDuration={400}>
        <ClickAwayListener onClickAway={toggleMenu}>
          <List>
            <IconButton color="primary" onClick={toggleMenu}>
              <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>

            <ListItemButton
              component={Link}
              to="/"
              sx={{
                borderTop: 1,
                borderColor: "grey.600",
                bgcolor: "kolmas.main",
              }}
              onClick={toggleMenu}
            >
              <ListItemIcon>
                <HomeIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Etusivu" />
            </ListItemButton>

            <ListItemButton
              onClick={toggleRuoka}
              sx={{
                borderTop: 1,
                borderColor: "grey.600",
                bgcolor: "kolmas.main",
              }}
            >
              <ListItemIcon>
                <LunchDiningIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Ruoka" />
              {openRuoka ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openRuoka}>
              <List disablePadding>
                <ListItemButton
                  sx={{ height: "30px" }}
                  onClick={toggleMenu}
                  component={Link}
                  to="ruoka"
                >
                  <ListItemText primary="Ruokapäiväkirja" />
                </ListItemButton>
                <ListItemButton
                  sx={{ height: "30px" }}
                  onClick={toggleMenu}
                  component={Link}
                  to="lisaaRuoka"
                >
                  <ListItemText primary="Lisää ruokailu" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton
              onClick={toggleUni}
              sx={{
                borderTop: 1,
                borderColor: "grey.600",
                bgcolor: "kolmas.main",
              }}
            >
              <ListItemIcon>
                <NotificationsPausedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Uni" />
              {openUni ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openUni}>
              <List disablePadding>
                <ListItemButton
                  sx={{ height: "30px" }}
                  onClick={toggleMenu}
                  component={Link}
                  to="uni"
                >
                  <ListItemText primary="Unenseuranta" />
                </ListItemButton>
                <ListItemButton
                  sx={{ height: "30px" }}
                  onClick={toggleMenu}
                  component={Link}
                  to="lisaaUni"
                >
                  <ListItemText primary="Lisää uni" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Unilistan alapuolinen viiva */}
            <ListItemButton
              disabled
              sx={{ borderTop: 1, borderColor: "grey.400" }}
            ></ListItemButton>
          </List>
        </ClickAwayListener>
      </Drawer>
    </Box>
  );
}
export default LeftMenu;
