import { NextRequest, NextResponse } from "next/server";
import { getPlatformFullstackContent } from "@/lib/platform-content/fullstackContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformFullstackContent(locale);

  return NextResponse.json(content);
}
