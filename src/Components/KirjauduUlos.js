import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Stack } from "@mui/material";

function KirjauduUlos() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 6) {
      setTimeout(() => setCount(count + 1), 1000);
    } else {
      navigate("/etusivu"); // Siirry etusivulle, kun aika on kulunut loppuun
    }
  }, [count, navigate]);

  return (
    <Stack alignItems="center" sx={{ mt: 2 }}>
      <Typography sx={{ fontSize: 20, color: "red", bgcolor: "#121212" }}>
        Uloskirjaus onnistui!
      </Typography>
      <Typography>
        Sinut uudelleenohjataan etusivulle {5 - count} sekunnin kuluttua
      </Typography>
    </Stack>
  );
}
export default KirjauduUlos;
