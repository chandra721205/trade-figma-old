# TRADIE FI 12 Figma Screens

Implemented the 12 supplied FI screens as React components in `src/app/components/FI12Screens.tsx`.

Routes are available by URL hash:

- `#fi` — launcher
- `#fi-210` — FI Dashboard
- `#fi-211` — Loan Applications
- `#fi-212` — Application Review
- `#fi-213` — Disburse Loan
- `#fi-214` — Collateral Monitoring
- `#fi-215` — Bill Purchase
- `#fi-216` — Repayments
- `#fi-217` — AI Risk Score
- `#fi-218` — Overdue Accounts
- `#fi-219` — FI Ledger
- `#fi-220` — Compliance Reports
- `#fi-221` — Settings

`src/main.tsx` preserves the existing application for all other URLs and mounts the FI screen router only for these `#fi*` hashes.
