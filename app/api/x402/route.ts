import { NextResponse } from "next/server";
import { V7_HOST } from "@/lib/v7";

// No PayDirect wallet is wired for vnoc.com here; report it as pending
// rather than inventing an endpoint (v7 kit rule).
export function GET() {
  return NextResponse.json({
    x402: true,
    host: V7_HOST,
    payTo: "pending_wallet",
    facilitator: "https://www.paydirect.com",
    note: "Wallet pending — do not invent PayDirect endpoints.",
  });
}
