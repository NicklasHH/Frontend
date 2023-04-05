import React, { useState } from 'react';
import LeftMenu from './LeftMenu'
import BottomBar from './BottomBar';
import taustaVideo from '../Media/taustaVideo.mp4'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createTheme } from '@mui/material/styles';
import { Link, Outlet } from 'react-router-dom';
import {Box, Menu, MenuItem, Button, AppBar, Toolbar} from '@mui/material';


const theme = createTheme({ });

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const TopBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e) => {
        handleClose(e);
      }
    }
  };

  return (
<Box>
      <AppBar position='relative'>
        <video autoPlay loop muted style={videoStyle}>
          <source src={taustaVideo} />
        </video>
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          <LeftMenu />
          <Button component={ Link } to='/etusivu'sx={{mb: 2, fontWeight: "bold", fontSize: 20}} >Etusivu</Button>
          <Box>

            <Button
              onMouseOver={handleOpen}
              onMouseLeave={handleClose}
              style={{ zIndex: 1301 }}
            >
              <AccountCircleIcon sx={{ fontSize: 40 }} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{ onMouseLeave: handleClose }}
              onClick={handleClose}
            >

              <MenuItem component={ Link } to='kirjaudu'>Kirjaudu</MenuItem>
              <MenuItem component={ Link } to='profiili'>Omat tiedot</MenuItem>
              <MenuItem component={ Link } to='kirjauduUlos' style={{ color: 'pink' }}>Kirjaudu ulos</MenuItem>
            </Menu>

          </Box>
        </Toolbar>
      </AppBar>
      <BottomBar />
      <Outlet />

      </Box>
  );
};

export default TopBar;