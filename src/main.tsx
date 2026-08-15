import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import App from "./app/App.tsx";
import FI12ScreenRouter from "./app/components/FI12ScreenRouter";
import Yard14ScreenRouter from "./app/components/Yard14ScreenRouter";
import Transporter15ScreenRouter from "./app/components/Transporter15ScreenRouter";
import "./styles/index.css";

function Root() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (hash === "#fi" || hash.startsWith("#fi-")) return <FI12ScreenRouter />;
  if (hash === "#yard" || hash.startsWith("#yard-")) return <Yard14ScreenRouter />;
  if (hash === "#transporter" || hash.startsWith("#transporter-")) return <Transporter15ScreenRouter />;
  return <App />;
}

createRoot(document.getElementById("root")!).render(<Root />);
