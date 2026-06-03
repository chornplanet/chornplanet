import { NextRequest, NextResponse } from "next/server";
import { getPlatformCloudDevopsContent } from "@/lib/platform-content/cloudDevopsContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformCloudDevopsContent(locale);

  return NextResponse.json(content);
}
