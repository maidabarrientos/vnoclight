import { NextResponse } from "next/server";
import { V7_BRAND, V7_HOST, V7_SCHEMA, V7_SUBTITLE } from "@/lib/v7";

export function GET() {
  return NextResponse.json({
    ok: true,
    host: V7_HOST,
    brand: V7_BRAND,
    subtitle: V7_SUBTITLE,
    schema: V7_SCHEMA,
  });
}
