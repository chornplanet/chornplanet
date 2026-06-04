import { NextRequest, NextResponse } from "next/server";
import { getSmartMobilityStationDetailContent } from "@/lib/platform-content/smartMobilityContent";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "slug is required" }, { status: 400 });
  }

  const content = getSmartMobilityStationDetailContent(slug);

  if (!content) {
    return NextResponse.json(
      { error: "MTS station not found" },
      { status: 404 },
    );
  }

  return NextResponse.json(content);
}
