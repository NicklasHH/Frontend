import backgroundb from "../Media/backgroundb.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleSearch from "../Components/GoogleSearch";
import EmailPop from "../Components/EmailPop";
import React, { useState } from "react";
import {
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  Tooltip,
} from "@mui/material";

function LeftMenu() {
  const [open] = useState(true);

  return (
    <Box>
      <Drawer
        anchor="bottom"
        open={open}
        variant="permanent"
        ModalProps={{
          keepMounted: false,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundImage: `url(${backgroundb})`,
          },
        }}
      >
        <List>
          <ListItem style={{ justifyContent: "center" }}>
            <EmailPop />
            <Tooltip title="Twitter" arrow>
              <IconButton
                onClick={() => window.open("https://www.twitter.com/")}
                style={{ color: "#1DA1F2" }}
              >
                <TwitterIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Github" arrow>
              <IconButton
                onClick={() => window.open("https://github.com/NicklasHH")}
                style={{ color: "white" }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <GoogleSearch />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default LeftMenu;
