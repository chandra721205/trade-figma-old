import { useEffect, useState } from "react";
import {
  FIDashboardScreen,
  FIIApplicationsScreen,
  FIApplicationDetailScreen,
  FIDisbursementScreen,
  FICollateralMonitoringScreen,
  FIBillPurchaseScreen,
  FIRepaymentTrackingScreen,
  FIRiskScoringScreen,
  FIOverdueManagementScreen,
  FISettingsScreen,
  FILedgerScreen,
  FIComplianceReportsScreen,
  FIScreenLauncher,
} from "./FI12Screens";

const routes: Record<string, React.ComponentType<{ onBack: () => void }>> = {
  "fi-210": FIDashboardScreen,
  "fi-211": FIIApplicationsScreen,
  "fi-212": FIApplicationDetailScreen,
  "fi-213": FIDisbursementScreen,
  "fi-214": FICollateralMonitoringScreen,
  "fi-215": FIBillPurchaseScreen,
  "fi-216": FIRepaymentTrackingScreen,
  "fi-217": FIRiskScoringScreen,
  "fi-218": FIOverdueManagementScreen,
  "fi-219": FILedgerScreen,
  "fi-220": FIComplianceReportsScreen,
  "fi-221": FISettingsScreen,
};

export default function FI12ScreenRouter() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "fi");

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash.replace(/^#/, "") || "fi");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const open = (nextRoute: string) => {
    window.location.hash = nextRoute;
  };

  if (route === "fi") {
    return <FIScreenLauncher onOpen={open} />;
  }

  const Screen = routes[route];
  if (!Screen) {
    window.location.hash = "fi";
    return null;
  }

  return <Screen onBack={() => open("fi")} />;
}
