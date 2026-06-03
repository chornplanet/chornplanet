import { NextRequest, NextResponse } from "next/server";
import { getPlatformContactContent } from "@/lib/platform-content/contactContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformContactContent(locale);

  return NextResponse.json(content);
}
