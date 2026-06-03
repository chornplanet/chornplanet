import { NextRequest, NextResponse } from "next/server";
import { getPlatformSmartCityContent } from "@/lib/platform-content/smartCityContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformSmartCityContent(locale);

  return NextResponse.json(content);
}
