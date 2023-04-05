import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExpandMore, ExpandLess } from '@mui/icons-material/';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Box, IconButton, Drawer, List, ListItemButton, ListItemText, ListItemIcon, Collapse } from "@mui/material";

function LeftMenu() {

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  }

  // sulkee kaikki
  const handleCloseMenu = () => {
    setOpenMenu(false);
    setOpenRuoka(false);
    setOpenUni(false);
  }

  const [openRuoka, setOpenRuoka] = React.useState(false);

  const handleClickRuoka = () => {
    setOpenRuoka(!openRuoka);
  };

  const [openUni, setOpenUni] = React.useState(false);

  const handleClickUni = () => {
    setOpenUni(!openUni);

  };

  const handleClickAway = () => {
    if (openMenu) {
      handleCloseMenu();
    }
  };

  return (
    <Box>
      <IconButton color='primary' onClick={handleOpenMenu}><MenuIcon sx={{ position: 'fixed', fontSize: 40 }} /></IconButton>

      <Drawer anchor='left' open={openMenu}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <List>
            <IconButton color='primary' onClick={handleCloseMenu}><MenuIcon sx={{ fontSize: 40 }} /></IconButton>

            <ListItemButton onClick={handleClickRuoka} sx={{ borderTop: 1, borderColor: 'grey.600', bgcolor: 'kolmas.main' }}>
              <ListItemIcon>
                <LunchDiningIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Ruoka" />
              {openRuoka ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openRuoka}>
              <List disablePadding>
                <ListItemButton sx={{ height: '30px' }} onClick={handleCloseMenu} component={Link} to='ruoka'>
                  <ListItemText primary="Ruokapäiväkirja" />
                </ListItemButton>
                <ListItemButton sx={{ height: '30px' }} onClick={handleCloseMenu} component={Link} to='lisaaRuoka'>
                  <ListItemText primary="Lisää ruokailu" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={handleClickUni} sx={{ borderTop: 1, borderColor: 'grey.600', bgcolor: 'kolmas.main' }}>
              <ListItemIcon>
                <NotificationsPausedIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary="Uni" />
              {openUni ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openUni}>
              <List disablePadding>
                <ListItemButton sx={{ height: '30px' }} onClick={handleCloseMenu} component={Link} to='uni'>
                  <ListItemText primary="Unenseuranta" />
                </ListItemButton >
                <ListItemButton sx={{ height: '30px' }} onClick={handleCloseMenu} component={Link} to='lisaaUni'>
                  <ListItemText primary="Lisää uni" />
                </ListItemButton>
              </List>
            </Collapse>

            {/* Unilistan alapuolinen viiva */}
            <ListItemButton disabled sx={{ borderTop: 1, borderColor: 'grey.400' }}>
            </ListItemButton>
          </List>
        </ClickAwayListener>
      </Drawer>

    </Box>
  );
}
export default LeftMenu;