import { useState, useEffect } from "react";
function Aika() {
  const [aika, setAika] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setAika(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return aika;
}
export default Aika;
