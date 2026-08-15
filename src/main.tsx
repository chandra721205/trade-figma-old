import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import App from "./app/App.tsx";
import FI12ScreenRouter from "./app/components/FI12ScreenRouter";
import Yard14ScreenRouter from "./app/components/Yard14ScreenRouter";
import { adminRoutes } from "./app/components/Admin20Screens";
import "./styles/index.css";

function AdminRouter() {
  const route = window.location.hash.replace(/^#/, "") || "admin-dashboard";
  const Screen = adminRoutes[route] ?? adminRoutes["admin-dashboard"];
  return <Screen />;
}

function Root() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (hash === "#fi" || hash.startsWith("#fi-")) return <FI12ScreenRouter />;
  if (hash === "#yard" || hash.startsWith("#yard-")) return <Yard14ScreenRouter />;
  if (hash === "#admin" || hash.startsWith("#admin-")) return <AdminRouter />;
  return <App />;
}

createRoot(document.getElementById("root")!).render(<Root />);
