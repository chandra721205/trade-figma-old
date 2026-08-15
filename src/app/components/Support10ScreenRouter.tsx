import { useEffect, useState, type ComponentType } from "react";
import { supportRoutes } from "./Support10Screens";

type Props = { onBack?: () => void };

export default function Support10ScreenRouter() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "support-search");
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace(/^#/, "") || "support-search");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const Screen = (supportRoutes[route] ?? supportRoutes["support-search"]) as ComponentType<Props>;
  return <Screen onBack={() => { window.location.hash = "support-search"; }} />;
}
