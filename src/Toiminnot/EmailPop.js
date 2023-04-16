import React, { useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Tooltip, IconButton, Box } from "@mui/material";

function EmailPop() {
  const [copySuccess, setCopySuccess] = useState("Sähköposti");

  function copyToClipboard() {
    navigator.clipboard.writeText("nicklas.akerman@myy.haaga-helia.fi");
    setCopySuccess("Sähköposti kopioitu leikepöydälle");
    setTimeout(() => {
      setCopySuccess("Sähköposti");
    }, 2000);
  }

  return (
    <Box>
      <Tooltip title={copySuccess} arrow>
        <IconButton onClick={copyToClipboard} style={{ color: "orange" }}>
          <AlternateEmailIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
export default EmailPop;
