import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import App from "./app/App.tsx";
import FI12ScreenRouter from "./app/components/FI12ScreenRouter";
import "./styles/index.css";

function Root() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return hash === "#fi" || hash.startsWith("#fi-") ? <FI12ScreenRouter /> : <App />;
}

createRoot(document.getElementById("root")!).render(<Root />);
