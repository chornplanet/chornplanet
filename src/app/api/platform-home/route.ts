import {NextRequest, NextResponse} from "next/server";
import {getPlatformContent} from "@/lib/platform-content/homeContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = getPlatformContent(locale);

  return NextResponse.json(content.home);
}
