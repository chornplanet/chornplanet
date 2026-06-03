import { NextRequest, NextResponse } from "next/server";
import { getPlatformStoryContent } from "@/lib/platform-content/storyContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";

  return NextResponse.json(getPlatformStoryContent(locale));
}
