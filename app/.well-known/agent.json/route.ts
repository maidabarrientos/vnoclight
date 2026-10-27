import { NextResponse } from "next/server";
import { V7_CARD_URL } from "@/lib/v7";

export const revalidate = 900;

export async function GET() {
  try {
    const res = await fetch(V7_CARD_URL, { next: { revalidate } });
    if (!res.ok) throw new Error(`card source returned ${res.status}`);
    const card = await res.json();
    return NextResponse.json(card, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    // Never serve an empty card that would still validate.
    const msg = err instanceof Error ? err.message : "card unavailable";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}
