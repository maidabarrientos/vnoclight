import { Schibsted_Grotesk } from "next/font/google";

// Homepage typeface: a grotesk with enough character to carry domain names.
export const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  // Next 13.4 has no fallback metrics for this family; skip the size-adjust.
  adjustFontFallback: false,
});
