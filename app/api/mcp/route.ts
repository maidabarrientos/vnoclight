import { NextResponse } from "next/server";
import { V7_BRAND, V7_HOST, V7_SCHEMA } from "@/lib/v7";

export function GET() {
  return NextResponse.json({
    schema: V7_SCHEMA,
    host: V7_HOST,
    brand: V7_BRAND,
    interfaces: ["mcp", "a2a"],
    status: "ok",
  });
}
