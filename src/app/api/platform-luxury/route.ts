import {NextRequest, NextResponse} from "next/server";
import {getAiLuxuryContent} from "@/lib/platform-content/luxuryContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";

  return NextResponse.json(getAiLuxuryContent(locale));
}
