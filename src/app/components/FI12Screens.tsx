import React from "react";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Bell,
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Copy,
  DownloadCloud,
  FileBarChart,
  FileText,
  Filter,
  Grid2X2,
  Home,
  Info,
  PlusCircle,
  ReceiptText,
  Search,
  UserRound,
  XCircle,
} from "lucide-react";

type BackProps = { onBack: () => void };

const C = {
  bg: "#f5f7fa",
  primary: "#283593",
  text: "#1a1a1a",
  muted: "#666666",
  border: "#e0e4e8",
  green: "#2e7d32",
  greenBg: "#e8f5e9",
  orange: "#ff8f00",
  orangeBg: "#fff8e1",
  red: "#d32f2f",
  redBg: "#ffebee",
  cyan: "#00bcd4",
  cyanBg: "#e0f7fa",
  indigoBg: "#e8eaf6",
  white: "#ffffff",
};

const mobileFrame = "mx-auto flex min-h-screen w-full max-w-[375px] flex-col overflow-hidden bg-[#f5f7fa] text-[#1a1a1a]";

function StatusBar() {
  return (
    <div className="flex h-11 items-center justify-between px-6 text-[14px] font-semibold">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <div className="flex items-end gap-[2px]" aria-hidden="true">
          <span className="h-2 w-[2px] rounded-sm bg-black/80" />
          <span className="h-3 w-[2px] rounded-sm bg-black/80" />
          <span className="h-4 w-[2px] rounded-sm bg-black/80" />
          <span className="h-5 w-[2px] rounded-sm bg-black/80" />
        </div>
        <div className="relative h-3 w-4" aria-hidden="true">
          <span className="absolute left-0 top-0 h-3 w-4 rounded-t-full border-2 border-black/80 border-b-0" />
          <span className="absolute bottom-0 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-black/80" />
        </div>
        <div className="flex h-3 w-5 items-center rounded-[3px] border border-black/80 px-[2px]" aria-hidden="true">
          <div className="h-2 w-full rounded-[1px] bg-black/80" />
        </div>
      </div>
    </div>
  );
}

function TitleBar({ title, onBack, right }: BackProps & { title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 py-3">
      <button onClick={onBack} className="grid size-6 place-items-center text-black" aria-label="Back">
        <ArrowLeft className="size-6" strokeWidth={1.8} />
      </button>
      <h1 className="text-[24px] font-bold leading-tight tracking-[-0.02em]">{title}</h1>
      <div className="grid size-6 place-items-center">{right ?? null}</div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${className}`}>{children}</div>;
}

function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "green" | "orange" | "red" | "indigo" }) {
  const styles = {
    neutral: "bg-[#eef1f4] text-[#666]",
    green: "bg-[#e8f5e9] text-[#2e7d32]",
    orange: "bg-[#fff8e1] text-[#ff8f00]",
    red: "bg-[#ffebee] text-[#d32f2f]",
    indigo: "bg-[#e8eaf6] text-[#283593]",
  }[tone];
  return <span className={`inline-flex items-center rounded-md px-2 py-1 text-[11px] font-bold ${styles}`}>{children}</span>;
}

function PrimaryButton({ children, onClick, className = "", danger = false }: { children: React.ReactNode; onClick?: () => void; className?: string; danger?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-11 w-full items-center justify-center rounded-lg px-4 text-[14px] font-semibold text-white ${danger ? "bg-[#d32f2f]" : "bg-[#283593]"} ${className}`}
    >
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick, className = "", danger = false }: { children: React.ReactNode; onClick?: () => void; className?: string; danger?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-11 items-center justify-center rounded-lg border bg-white px-4 text-[14px] font-semibold ${danger ? "border-[#d32f2f] text-[#d32f2f]" : "border-[#283593] text-[#283593]"} ${className}`}
    >
      {children}
    </button>
  );
}

function Toggle({ on = true }: { on?: boolean }) {
  return (
    <div className={`flex h-6 w-11 items-center rounded-full p-1 ${on ? "bg-[#283593]" : "bg-[#d7dde2]"}`}>
      <span className={`size-4 rounded-full bg-white shadow-sm transition-transform ${on ? "translate-x-5" : "translate-x-0"}`} />
    </div>
  );
}

const navItems = [
  { label: "Home", icon: Home },
  { label: "Applications", icon: FileText },
  { label: "Collateral", icon: BarChart3 },
  { label: "Bill", icon: ReceiptText },
  { label: "More", icon: Grid2X2 },
];

function BottomNav({ active = "Home" }: { active?: string }) {
  return (
    <div className="mt-auto border-t border-[#e0e4e8] bg-white">
      <div className="flex h-[84px] items-start justify-between px-4 pt-3">
        {navItems.map(({ label, icon: Icon }) => {
          const isActive = label === active;
          return (
            <div key={label} className="flex w-[68px] flex-col items-center gap-1 text-center">
              <Icon className={`size-6 ${isActive ? "text-[#283593]" : "text-[#666]"}`} strokeWidth={isActive ? 2 : 1.8} />
              <span className={`text-[10px] font-semibold ${isActive ? "text-[#283593]" : "text-[#666]"}`}>{label}</span>
            </div>
          );
        })}
      </div>
      <div className="flex h-6 items-start justify-center pb-2">
        <div className="h-[5px] w-[134px] rounded-full bg-black/10" />
      </div>
    </div>
  );
}

function RingScore({ score = 6.5 }: { score?: number }) {
  return (
    <div
      className="relative size-40 rounded-full"
      style={{ background: `conic-gradient(${C.orange} 0 ${score * 10}%, #e0e4e8 ${score * 10}% 100%)` }}
    >
      <div className="absolute inset-[12px] flex flex-col items-center justify-center rounded-full bg-[#f5f7fa]">
        <div className="text-[36px] font-bold leading-none">{score.toFixed(1)}</div>
        <div className="mt-2 text-[11px] font-medium text-[#ff8f00]">Medium Risk</div>
      </div>
    </div>
  );
}

export function FIDashboardScreen({ onBack }: BackProps) {
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <div className="flex items-center justify-between px-5 py-3">
        <div>
          <div className="text-[12px] font-semibold uppercase text-[#283593]">TRADIE FI</div>
          <div className="text-[20px] font-semibold leading-tight text-black">HDFC – Agri Lending</div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="size-6" strokeWidth={1.8} />
          <div className="grid size-9 place-items-center overflow-hidden rounded-full bg-[#e9eef4]"><UserRound className="size-5 text-[#536475]" /></div>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[
          ["Total Disbursed", "₹5.00 Cr"],
          ["Active Loans", "342"],
          ["Overdue 30+", "12"],
        ].map(([label, value], index) => (
          <Card key={label} className="min-w-[160px] p-4">
            <div className="text-[12px] font-semibold uppercase text-[#666]">{label}</div>
            <div className={`mt-2 text-[20px] font-semibold ${index === 2 ? "text-[#d32f2f]" : "text-[#283593]"}`}>{value}</div>
            {index === 2 && <Badge tone="red">High Risk</Badge>}
          </Card>
        ))}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <div className="text-[16px] font-semibold">Pending Applications</div>
          <div className="text-[14px] font-semibold text-[#283593]">View All</div>
        </div>
        <Card className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[16px] font-semibold">Rajesh Kumar (Producer)</div>
              <div className="text-[12px] text-[#666]">TRD-CHL-089234 (Chilli)</div>
            </div>
            <div className="text-[16px] font-semibold text-[#283593]">₹2,50,000</div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[12px] text-[#666]">
              <span>AI Risk Score:</span>
              <Badge tone="orange">7.2/10 Medium</Badge>
            </div>
            <PrimaryButton className="w-auto h-8 px-4 text-[13px]">Review</PrimaryButton>
          </div>
        </Card>

        <div className="flex items-start gap-3 rounded-xl border border-[#d32f2f] bg-[#ffebee] p-3 text-[12px] text-[#d32f2f]">
          <AlertTriangle className="mt-0.5 size-5 shrink-0" />
          <div>Token TRD-123 value dropped 12% – margin call triggered</div>
        </div>

        <div>
          <div className="mb-3 text-[12px] font-semibold uppercase text-[#666]">Quick Actions</div>
          <div className="grid grid-cols-3 gap-3">
            {["New App", "Bill Purchase", "Reports"].map((label) => (
              <div key={label} className="rounded-xl border border-[#e0e4e8] bg-white p-3 text-center">
                <div className="mx-auto mb-2 grid size-10 place-items-center rounded-full bg-[#e8eaf6]"><PlusCircle className="size-5 text-[#283593]" /></div>
                <div className="text-[11px] font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="Home" />
    </div>
  );
}

export function FIIApplicationsScreen({ onBack }: BackProps) {
  const applications = [
    { name: "Priya Agencies (CA)", meta: "Working Capital · 3 Tokens", amount: "₹5,00,000", risk: "6.5/10 Amber", tone: "orange" as const, accent: true },
    { name: "Sunil Traders", meta: "Term Loan · TRD-Paddy-01", amount: "₹8,20,000", risk: "8.1/10 High", tone: "red" as const },
    { name: "Agro Exports", meta: "Bill Discount · INV-442", amount: "₹15,00,000", risk: "4.2/10 Low", tone: "green" as const },
  ];
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="Loan Applications" onBack={onBack} right={<Filter className="size-6" strokeWidth={1.8} />} />
      <div className="flex gap-5 border-b border-[#e0e4e8] px-5">
        <div className="border-b-2 border-[#283593] py-3 text-[16px] font-medium text-[#283593]">Pending (8)</div>
        <div className="py-3 text-[16px] font-medium text-[#666]">Approved (12)</div>
        <div className="py-3 text-[16px] font-medium text-[#666]">Rejected (3)</div>
      </div>
      <div className="space-y-4 overflow-y-auto p-5">
        {applications.map((item) => (
          <div key={item.name} className={`rounded-2xl ${item.accent ? "border-l-4 border-[#ff8f00]" : ""}`}>
            <Card className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-[16px] font-semibold">{item.name}</div>
                  <div className="text-[12px] text-[#666]">{item.meta}</div>
                </div>
                <div className="text-[16px] font-semibold text-[#283593]">{item.amount}</div>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[12px] text-[#666]">
                  <span>AI Risk Score:</span>
                  <Badge tone={item.tone}>{item.risk}</Badge>
                </div>
                <PrimaryButton className="h-8 w-auto px-4 text-[13px]">Review</PrimaryButton>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <BottomNav active="Applications" />
    </div>
  );
}

export function FIApplicationDetailScreen({ onBack }: BackProps) {
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="Application Review" onBack={onBack} />
      <div className="space-y-4 overflow-y-auto px-5">
        <Card className="p-4">
          <div className="flex items-start justify-between">
            <div><div className="text-[16px] font-semibold">Priya Agencies</div><div className="text-[14px] text-[#666]">Commission Agent</div></div>
            <Badge tone="indigo">KYC Platinum</Badge>
          </div>
          <div className="mt-4 flex gap-6">
            <div><div className="text-[12px] font-semibold uppercase text-[#666]">Past Loans</div><div className="text-[16px]">3</div></div>
            <div><div className="text-[12px] font-semibold uppercase text-[#666]">Repaid</div><div className="text-[16px] text-[#2e7d32]">2</div></div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="text-[12px] font-semibold uppercase text-[#666]">Loan Details</div>
          <div className="mt-3 grid grid-cols-3 gap-y-4">
            {[["Amount", "₹5,00,000"], ["Tenure", "12 Months"], ["Interest", "11% p.a."]].map(([label, value]) => (
              <div key={label}><div className="text-[12px] text-[#666]">{label}</div><div className={`text-[16px] font-semibold ${label === "Interest" ? "text-[#283593]" : ""}`}>{value}</div></div>
            ))}
          </div>
          <div className="mt-4 text-[14px] text-[#666]">Purpose: working capital for chilli procurement</div>
        </Card>

        <div className="rounded-2xl bg-[#283593] p-4 text-white">
          <div className="text-[12px] font-semibold uppercase opacity-70">Collateral Overview</div>
          <div className="mt-3 space-y-2 text-[14px]">
            <div className="flex justify-between"><span>Chilli (120MT)</span><b>₹33.6L</b></div>
            <div className="flex justify-between"><span>Paddy (50MT)</span><b>₹11.0L</b></div>
            <div className="h-px bg-white/20" />
            <div className="flex justify-between text-[16px] text-[#00bcd4]"><b>Total Value / LTV</b><b>₹44.6L / 11%</b></div>
          </div>
        </div>

        <Card className="flex items-center gap-4 p-4">
          <div className="grid size-16 place-items-center rounded-full border-4 border-[#ff8f00] text-[20px] font-semibold">6.5</div>
          <div><div className="text-[16px] font-semibold">Medium Risk</div><div className="text-[12px] text-[#666]">Market volatility is currently medium</div></div>
        </Card>
      </div>
      <div className="space-y-3 p-5">
        <PrimaryButton className="bg-[#2e7d32] h-14 text-[16px]">Approve Application</PrimaryButton>
        <div className="flex gap-3">
          <OutlineButton className="flex-1 h-12" danger>Reject</OutlineButton>
          <OutlineButton className="flex-1 h-12 !border-[#666] !text-[#666]">Request Info</OutlineButton>
        </div>
      </div>
    </div>
  );
}

export function FIDisbursementScreen({ onBack }: BackProps) {
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="Disburse Loan" onBack={onBack} />
      <div className="space-y-6 overflow-y-auto px-5">
        <div className="rounded-2xl bg-[#e8eaf6] p-4">
          <div className="text-[12px] font-semibold uppercase text-[#283593]">Loan Summary</div>
          <div className="mt-2 flex items-center justify-between"><div className="text-[20px] font-semibold">₹5,00,000</div><div className="text-[14px] text-[#666]">Priya Agencies</div></div>
        </div>
        <div>
          <div className="mb-4 text-[16px] font-semibold">Disbursement Method</div>
          <div className="flex gap-2">
            <button className="rounded-full border border-[#e0e4e8] bg-[#283593] px-4 py-2.5 text-[13px] font-semibold text-white">Bank Transfer</button>
            <button className="rounded-full border border-[#e0e4e8] bg-white px-4 py-2.5 text-[13px] font-semibold">UPI</button>
            <button className="rounded-full border border-[#e0e4e8] bg-white px-4 py-2.5 text-[13px] font-semibold">TRD Wallet</button>
          </div>
          <div className="mt-4 rounded-xl border border-[#e0e4e8] bg-white p-4"><div className="text-[12px] font-semibold uppercase text-[#666]">HDFC Account</div><div className="mt-1 text-[16px] font-medium">XXXX XXXX 4521</div></div>
        </div>
        <div className="space-y-3">
          <PrimaryButton className="h-14 text-[16px]">Confirm Disbursement</PrimaryButton>
          <div className="flex flex-col items-center gap-3">
            <div className="text-[14px] text-[#666]">Enter OTP sent to registered number</div>
            <div className="flex gap-2">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="grid size-11 place-items-center rounded-lg border border-[#e0e4e8] bg-white text-[20px]">•</div>)}</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 rounded-[20px] bg-[#e8f5e9] p-6 text-center">
          <div className="grid size-14 place-items-center rounded-full bg-[#2e7d32]"><Check className="size-7 text-white" /></div>
          <div className="text-[16px] font-semibold text-[#2e7d32]">Loan Disbursed Successfully</div>
          <div className="text-[12px] text-[#2e7d32]">Borrower notified via TRADIE App</div>
        </div>
      </div>
    </div>
  );
}

export function FIBillPurchaseScreen({ onBack }: BackProps) {
  const [showOffer, setShowOffer] = React.useState(true);
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[375px] overflow-hidden bg-[#f5f7fa] text-[#1a1a1a]">
      <div className="flex min-h-screen flex-col">
        <StatusBar />
        <TitleBar title="Bill Purchase" onBack={onBack} />
        <div className="space-y-3 px-5">
          {[{ id: "INV-001", from: "Priya Agencies → ABC Exports", amount: "₹1,20,000", score: "7.2/10" }, { id: "INV-002", from: "Sunil Traders → Global Rice", amount: "₹85,000", score: "6.1/10" }].map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center justify-between"><div className="text-[16px] font-semibold">{item.id}</div><Badge tone="green">{item.score}</Badge></div>
              <div className="mt-2"><div className="text-[14px]">{item.from}</div><div className="mt-1 text-[20px] font-semibold text-[#283593]">{item.amount}</div><div className="text-[12px] text-[#666]">Due in 15 days</div></div>
              <PrimaryButton className="mt-3" onClick={() => setShowOffer(true)}>Offer Discount</PrimaryButton>
            </Card>
          ))}
        </div>
      </div>
      {showOffer && (
        <div className="absolute inset-0 flex flex-col justify-end bg-black/25">
          <div className="rounded-t-[32px] bg-white p-6 shadow-[0_-8px_12px_rgba(0,0,0,0.2)]">
            <div className="flex items-center justify-between"><div className="text-[20px] font-semibold">Send Discount Offer</div><button onClick={() => setShowOffer(false)}><XCircle className="size-6" /></button></div>
            <div className="mt-5 space-y-3">
              <div className="text-[14px] text-[#666]">Selected Discount: 3.0%</div>
              <div className="relative h-2 rounded-full bg-[#e8eaf6]"><div className="h-full w-[100px] rounded-full bg-[#283593]" /><div className="absolute left-[88px] top-1/2 size-6 -translate-y-1/2 rounded-full border-2 border-[#283593] bg-white" /></div>
              <div className="flex justify-between text-[14px]"><span>Invoice Amt: ₹1,20,000</span><b className="text-[#283593]">Net: ₹1,16,400</b></div>
            </div>
            <div className="mt-6 space-y-2"><PrimaryButton className="h-14 text-[16px]">Send Offer</PrimaryButton><button onClick={() => setShowOffer(false)} className="flex h-12 w-full items-center justify-center text-[16px] font-semibold text-[#666]">Cancel</button></div>
            <div className="mx-auto mt-5 h-[5px] w-[134px] rounded-full bg-black/10" />
          </div>
        </div>
      )}
    </div>
  );
}

export function FICollateralMonitoringScreen({ onBack }: BackProps) {
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="Collateral Monitoring" onBack={onBack} />
      <div className="space-y-4 overflow-y-auto px-5">
        <div className="flex items-center gap-2 rounded-xl border border-[#e0e4e8] bg-white p-3 text-[14px] text-[#666]"><Search className="size-5" /><span>Search borrower or token ID</span></div>
        <div className="space-y-3">
          <Card className="border-l-4 border-[#2e7d32] p-4">
            <div className="flex items-center justify-between"><div className="text-[16px] font-semibold">TRD-CHL-089234</div><Badge tone="green">Healthy</Badge></div>
            <div className="mt-3 text-[12px] text-[#666]">Owner: Rajesh Kumar</div><div className="mt-1 text-[16px] font-medium text-[#283593]">₹33,60,000 (LTV 80%)</div>
            <div className="mt-3"><Badge tone="orange">Value dropped 5% – Within tolerance</Badge></div>
            <div className="mt-3 flex gap-2"><button className="h-10 flex-1 rounded-lg bg-[#e8eaf6] text-[13px] font-semibold text-[#283593]">View Details</button><button className="h-10 flex-1 rounded-lg border border-[#283593] bg-white text-[13px] font-semibold text-[#283593]">Margin Call</button></div>
          </Card>
          <Card className="border-2 border-[#d32f2f] p-4">
            <div className="flex items-center justify-between"><div className="text-[16px] font-semibold">TRD-WHL-112</div><Badge tone="red">CRITICAL</Badge></div>
            <div className="mt-3 text-[12px] text-[#666]">Owner: Mehta Traders</div><div className="mt-1 text-[16px] font-medium text-[#d32f2f]">Value dropped 22%!</div>
            <PrimaryButton danger className="mt-3">Trigger Margin Call</PrimaryButton>
          </Card>
        </div>
      </div>
      <BottomNav active="Collateral" />
    </div>
  );
}

export function FIRepaymentTrackingScreen({ onBack }: BackProps) {
  const rows = [
    ["Priya Agencies", "Loan #L-001 · Due 15 Jul", "₹45,000", "Overdue 5 days", "orange"],
    ["Rajesh Kumar", "Loan #L-002 · Due 20 Jul", "₹22,000", "Upcoming", "indigo"],
    ["Mehta Traders", "Loan #L-003 · Due 10 Jul", "₹60,000", "Paid", "green"],
  ] as const;
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="Repayments" onBack={onBack} />
      <div className="px-5">
        <div className="rounded-2xl bg-[#283593] p-4 text-white shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
          <div className="text-[12px] font-semibold uppercase opacity-70">Total Due This Month</div>
          <div className="mt-1 text-[28px] font-bold">₹1,27,000</div>
          <div className="mt-3 flex gap-6"><div><div className="text-[11px] opacity-70">Collected</div><div className="text-[16px] font-semibold text-[#00bcd4]">₹82,000</div></div><div><div className="text-[11px] opacity-70">Outstanding</div><div className="text-[16px] font-semibold">₹45,000</div></div></div>
        </div>
      </div>
      <div className="mt-3 flex gap-5 border-b border-[#e0e4e8] px-5 text-[14px] font-semibold">
        <div className="border-b-2 border-[#283593] py-3 text-[#283593]">Current</div><div className="py-3 text-[#666]">1–30 Overdue</div><div className="py-3 text-[#666]">30+</div>
      </div>
      <div className="space-y-3 overflow-y-auto p-5">
        {rows.map(([name, meta, amount, status, tone]) => (
          <Card key={name} className="p-4">
            <div className="flex items-center justify-between"><div><div className="text-[16px] font-semibold">{name}</div><div className="text-[11px] text-[#666]">{meta}</div></div><div className="text-[16px] font-semibold text-[#283593]">{amount}</div></div>
            <div className="mt-3 flex items-center justify-between"><Badge tone={tone}>{status}</Badge>{tone !== "green" && <OutlineButton className="h-9 px-4 text-[13px]">{tone === "orange" ? "Remind" : "Notify"}</OutlineButton>}</div>
          </Card>
        ))}
      </div>
      <div className="px-5 pb-4"><div className="flex items-center justify-between rounded-xl bg-[#e8eaf6] p-4"><div className="text-[14px] font-semibold text-[#283593]">Auto-deduct from sale proceeds</div><Toggle /></div></div>
      <BottomNav active="Home" />
    </div>
  );
}

export function FIRiskScoringScreen({ onBack }: BackProps) {
  const bars = [
    ["Payment History (40%)", "Good", 78, "green"],
    ["Collateral Quality (30%)", "High", 88, "green"],
    ["Market Conditions (20%)", "Moderate", 55, "orange"],
    ["Reputation Score (10%)", "Excellent", 92, "green"],
  ] as const;
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="AI Risk Score" onBack={onBack} />
      <div className="overflow-y-auto">
        <div className="px-5 pt-1"><Card className="border border-[#e0e4e8] p-4"><div className="text-[16px] font-semibold">Priya Agencies</div><div className="mt-1 text-[14px] text-[#666]">Working Capital · ₹5,00,000</div></Card></div>
        <div className="flex justify-center py-8"><RingScore /></div>
        <div className="px-5 pb-2"><div className="mb-4 text-[12px] font-semibold uppercase text-[#666]">Score Breakdown</div>
          <div className="space-y-4">
            {bars.map(([label, status, width, tone]) => (
              <div key={label}>
                <div className="flex items-center justify-between text-[11px]"><span className="text-[#666]">{label}</span><span className={`font-bold ${tone === "orange" ? "text-[#ff8f00]" : "text-[#2e7d32]"}`}>{status}</span></div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-[#e0e4e8]"><div className={`h-full rounded-full ${tone === "orange" ? "bg-[#ff8f00]" : "bg-[#2e7d32]"}`} style={{ width: `${width}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 py-6"><div className="mb-3 text-[12px] font-semibold uppercase text-[#666]">AI Recommendations</div><div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"><div className="min-w-[200px] rounded-xl bg-[#e8eaf6] p-3 text-[13px] text-[#283593]">Consider reducing LTV to 70%</div><div className="min-w-[200px] rounded-xl bg-[#e8eaf6] p-3 text-[13px] text-[#283593]">Request documents</div></div></div>
      </div>
      <div className="p-5"><OutlineButton className="h-12 w-full">Export Risk Report</OutlineButton></div>
    </div>
  );
}

export function FIOverdueManagementScreen({ onBack }: BackProps) {
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="Overdue Accounts" onBack={onBack} />
      <div className="bg-[#d32f2f] px-3 py-3 text-center text-[14px] font-semibold text-white">12 accounts overdue – ₹45,00,000 at risk</div>
      <div className="space-y-4 overflow-y-auto p-5">
        <Card className="p-4"><div className="flex items-start justify-between"><div><div className="text-[16px] font-semibold">Rajesh Kumar</div><div className="text-[14px] text-[#666]">Loan: ₹2,50,000</div></div><Badge tone="orange">Overdue 45 days</Badge></div><div className="mt-3 flex gap-2"><PrimaryButton className="h-10 w-auto text-[13px]">Send Reminder</PrimaryButton><OutlineButton className="h-10 w-auto !border-[#666] !text-[#666]">Escalate</OutlineButton></div></Card>
        <Card className="border-2 border-[#d32f2f] p-4"><div className="flex items-start justify-between"><div><div className="text-[16px] font-semibold">Mehta Traders</div><div className="text-[14px] text-[#666]">Loan: ₹8,00,000</div></div><Badge tone="red">Overdue 95 days</Badge></div><div className="mt-3 rounded-lg bg-[#ffebee] p-2.5 text-[11px] font-bold text-[#d32f2f]">AUTO-ESCALATED TO LEGAL</div><PrimaryButton className="mt-3">View Case</PrimaryButton></Card>
        <div className="flex items-center justify-between px-1 text-[14px]"><span>Block new loans for &gt;90d</span><Toggle /></div>
      </div>
      <div className="flex gap-3 border-t border-[#e0e4e8] bg-white p-5"><OutlineButton className="h-12">Select All</OutlineButton><PrimaryButton className="h-12 flex-1">Bulk Reminder</PrimaryButton></div>
    </div>
  );
}

export function FISettingsScreen({ onBack }: BackProps) {
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="Settings" onBack={onBack} />
      <div className="space-y-3 overflow-y-auto px-5">
        <Card className="p-4"><div className="flex items-center justify-between"><div><div className="text-[16px] font-semibold">HDFC – Agri Lending</div><div className="text-[11px] text-[#666]">RBI: RBI/2024/NBFC/001</div></div><button className="text-[14px] font-semibold text-[#283593]">Edit</button></div></Card>
        <div className="text-[12px] font-semibold uppercase text-[#666]">API Integration</div>
        <Card className="p-4"><div className="flex items-center justify-between text-[11px]"><span className="text-[#666]">Primary API Key</span><button className="text-[14px] font-semibold text-[#283593]">Regenerate</button></div><div className="mt-3 flex items-center justify-between rounded-lg bg-[#f5f7fa] p-3 text-[14px]"><span>****-****-4521</span><Copy className="size-[18px]" /></div></Card>
        <div className="text-[12px] font-semibold uppercase text-[#666]">Loan Products</div>
        <Card className="overflow-hidden">
          {[["Working Capital","11% p.a. · LTV 80%"],["Term Loan","12.5% p.a. · LTV 70%"],["Bill Discounting","9.5% p.a. · LTV N/A"]].map(([title, meta]) => <div key={title} className="flex items-center justify-between border-b border-[#e0e4e8] p-4 last:border-b-0"><div><div className="text-[14px] font-semibold">{title}</div><div className="text-[11px] text-[#666]">{meta}</div></div><ChevronRight className="size-[18px] text-[#666]" /></div>)}
        </Card>
        <div className="text-[12px] font-semibold uppercase text-[#666]">Notifications</div>
        <Card className="overflow-hidden">{["New applications","Margin call alerts","Overdue reminders"].map((label) => <div key={label} className="flex items-center justify-between border-b border-[#e0e4e8] p-4 last:border-b-0"><span className="text-[14px]">{label}</span><Toggle /></div>)}</Card>
        <div className="flex items-center justify-center py-8"><button className="text-[16px] font-semibold text-[#d32f2f]">Logout</button></div>
      </div>
      <BottomNav active="More" />
    </div>
  );
}

export function FILedgerScreen({ onBack }: BackProps) {
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="FI Ledger" onBack={onBack} right={<DownloadCloud className="size-6" strokeWidth={1.8} />} />
      <div className="px-5"><div className="rounded-2xl border-2 border-[#00bcd4] bg-white p-4"><div className="text-[12px] font-semibold uppercase text-[#666]">Outstanding Balance</div><div className="mt-1 text-[32px] font-bold text-[#00bcd4]">₹65,00,000</div><div className="mt-3 flex items-start justify-between"><div><div className="text-[11px] text-[#666]">Disbursed</div><div className="text-[14px] font-semibold">₹2.50 Cr</div></div><div><div className="text-[11px] text-[#666]">Repaid</div><div className="text-[14px] font-semibold">₹1.85 Cr</div></div></div></div></div>
      <div className="flex items-center gap-3 px-5 py-4"><div className="flex items-center gap-2 rounded-xl border border-[#e0e4e8] bg-white px-3 py-2"><CalendarDays className="size-[18px] text-[#666]" /><span className="text-[14px] text-[#666]">Jul 01 - Jul 15</span></div><div className="grid size-12 place-items-center rounded-xl bg-white shadow-sm"><DownloadCloud className="size-5 text-[#283593]" /></div></div>
      <div className="overflow-y-auto border-y border-[#e0e4e8] bg-white">
        {[["Mehta Traders","10 Jul · Disbursal","– ₹3,00,000","Bal: ₹65.0L","red"],["Rajesh Kumar","05 Jul · Repayment","+ ₹22,000","Bal: ₹62.0L","green"],["Priya Agencies","01 Jul · Disbursal","– ₹5,00,000","Bal: ₹62.2L","red"]].map(([name, meta, amount, balance, tone]) => <div key={name} className="flex items-center justify-between border-b border-[#e0e4e8] p-5 last:border-b-0"><div className="w-[180px]"><div className="text-[14px] font-semibold">{name}</div><div className="text-[11px] text-[#666]">{meta}</div></div><div className="text-right"><div className={`text-[14px] font-semibold ${tone === "red" ? "text-[#d32f2f]" : "text-[#2e7d32]"}`}>{amount}</div><div className="text-[11px] text-[#666]">{balance}</div></div></div>)}
      </div>
      <BottomNav active="Bill" />
    </div>
  );
}

export function FIComplianceReportsScreen({ onBack }: BackProps) {
  const cards = [
    ["NPA Report", CircleAlert, "bg-[rgba(211,47,47,0.1)] text-[#d32f2f]"],
    ["Portfolio Quality", FileText, "bg-[rgba(40,53,147,0.1)] text-[#283593]"],
    ["Risk Exposure", Activity, "bg-[rgba(255,143,0,0.1)] text-[#ff8f00]"],
    ["Loan Disbursal", BarChart3, "bg-[rgba(46,125,50,0.1)] text-[#2e7d32]"],
  ] as const;
  return (
    <div className={mobileFrame}>
      <StatusBar />
      <TitleBar title="Compliance Reports" onBack={onBack} />
      <div className="grid grid-cols-2 gap-3 p-5">
        {cards.map(([label, Icon, bg]) => <Card key={label} className="p-4"><div className={`grid size-10 place-items-center rounded-full ${bg}`}><Icon className="size-5" /></div><div className="mt-3 text-[11px] font-bold">{label}</div></Card>)}
      </div>
      <div className="flex gap-3 px-5"><button className="rounded-full border border-[#e0e4e8] bg-white px-4 py-2 text-[13px] font-semibold text-[#666]">Month</button><button className="rounded-full bg-[#283593] px-4 py-2 text-[13px] font-semibold text-white">Quarter</button><button className="rounded-full border border-[#e0e4e8] bg-white px-4 py-2 text-[13px] font-semibold text-[#666]">Year</button></div>
      <Card className="mx-5 mt-4 p-5"><div className="flex items-start justify-between"><div><div className="text-[16px] font-semibold">NPA Report – Q2 2024</div><div className="mt-1 text-[11px] text-[#666]">Status: Generating...</div></div><Activity className="size-5 animate-pulse text-[#283593]" /></div><div className="my-4 h-px bg-[#e0e4e8]" /><div className="text-[11px] text-[#666]">Last Generated: 01 Jul 2024</div><div className="mt-3 flex gap-3"><PrimaryButton className="h-10 w-auto px-4">PDF</PrimaryButton><OutlineButton className="h-10 w-auto px-4">Excel</OutlineButton></div></Card>
      <div className="space-y-3 p-5"><div className="text-[12px] font-semibold uppercase text-[#666]">Scheduled Reports</div><Card className="flex items-center justify-between p-4"><div><div className="text-[14px] font-semibold">Monthly NPA</div><div className="text-[11px] text-[#666]">Auto on 1st of month</div></div><Toggle /></Card></div>
      <BottomNav active="More" />
    </div>
  );
}

export function FIOverdueAccountsScreen({ onBack }: BackProps) {
  return <FIOverdueManagementScreen onBack={onBack} />;
}

export function FIScreenLauncher({ onOpen }: { onOpen: (route: string) => void }) {
  const screens = [
    ["fi-210", "FI Dashboard"],
    ["fi-211", "Loan Applications"],
    ["fi-212", "Application Review"],
    ["fi-213", "Disburse Loan"],
    ["fi-214", "Collateral Monitoring"],
    ["fi-215", "Bill Purchase"],
    ["fi-216", "Repayments"],
    ["fi-217", "AI Risk Score"],
    ["fi-218", "Overdue Accounts"],
    ["fi-219", "FI Ledger"],
    ["fi-220", "Compliance Reports"],
    ["fi-221", "Settings"],
  ];
  return (
    <div className="min-h-screen bg-[#f5f7fa] p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="text-[12px] font-semibold uppercase tracking-wide text-[#283593]">TRADIE FI</div>
          <h1 className="mt-1 text-3xl font-bold">12 Figma Screens</h1>
          <p className="mt-2 text-sm text-[#666]">Finance-institution lending flow implemented from the supplied Figma designs.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map(([route, label], index) => <button key={route} onClick={() => onOpen(route)} className="rounded-2xl border border-[#e0e4e8] bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><div className="text-[11px] font-semibold uppercase text-[#666]">Screen {index + 1}</div><div className="mt-1 text-[16px] font-semibold text-[#283593]">{label}</div><div className="mt-2 text-[12px] text-[#666]">Open 375px mobile layout</div></button>)}
        </div>
      </div>
    </div>
  );
}
