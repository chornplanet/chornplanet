import { NextRequest, NextResponse } from "next/server";
import { getSmartMobilityLandingContent } from "@/lib/platform-content/smartMobilityContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";

  return NextResponse.json(getSmartMobilityLandingContent(locale));
}
