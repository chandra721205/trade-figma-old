Implemented the 12 supplied Figma FI screens as React components in `src/app/components/FI12Screens.tsx` and added `src/app/components/FI12ScreenRouter.tsx` plus hash routing in `src/main.tsx`.

The existing application remains the default experience. Use `#fi` or one of `#fi-210` through `#fi-221` to open the new FI screens.

The implementation uses the repository's existing React/Vite/Tailwind stack and existing `lucide-react` dependency; no new dependency was added.
