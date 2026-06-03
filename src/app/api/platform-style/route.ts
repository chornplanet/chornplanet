import {NextRequest, NextResponse} from "next/server";
import {getPlatformOutfitContent} from "@/lib/platform-content/styleContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";

  return NextResponse.json(getPlatformOutfitContent(locale));
}
