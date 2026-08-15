import { useEffect, useState, type ComponentType } from "react";
import {
  YardDashboardScreen,
  TaxCollectionScreen,
  StateOverviewScreen,
  DailyArrivalReportScreen,
  GateEntryScreen,
  ManualEntryScreen,
  QueueManagementScreen,
  AuctionBoardScreen,
  WeighbridgeScreen,
  YardReportsScreen,
  ComplianceOverviewScreen,
  NationalMarketScreen,
  AndhraOverviewScreen,
  DisputeOversightScreen,
  PriceBulletinScreen,
} from "./Yard14Screens";

type Props = { onBack: () => void };
const routes: Record<string, ComponentType<Props>> = {
  "yard-232": YardDashboardScreen,
  "yard-233": GateEntryScreen,
  "yard-234": ManualEntryScreen,
  "yard-235": QueueManagementScreen,
  "yard-236": AuctionBoardScreen,
  "yard-237": WeighbridgeScreen,
  "yard-238": TaxCollectionScreen,
  "yard-239": DailyArrivalReportScreen,
  "yard-240": PriceBulletinScreen,
  "yard-241": DisputeOversightScreen,
  "yard-242": AndhraOverviewScreen,
  "yard-243": StateOverviewScreen,
  "yard-244": NationalMarketScreen,
  "yard-245": ComplianceOverviewScreen,
  "yard-246": YardReportsScreen,
};

export default function Yard14ScreenRouter() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "yard");
  useEffect(() => {
    const handle = () => setRoute(window.location.hash.replace(/^#/, "") || "yard");
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);
  const open = (next: string) => { window.location.hash = next; };
  if (route === "yard") return <YardDashboardScreen onBack={() => open("yard-232")} />;
  const Screen = routes[route] ?? YardDashboardScreen;
  return <Screen onBack={() => open("yard")} />;
}
