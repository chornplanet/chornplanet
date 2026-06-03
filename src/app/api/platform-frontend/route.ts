import { NextRequest, NextResponse } from "next/server";
import { getPlatformFrontendContent } from "@/lib/platform-content/frontendContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformFrontendContent(locale);

  return NextResponse.json(content);
}
