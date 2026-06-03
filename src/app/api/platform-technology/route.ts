import { NextRequest, NextResponse } from "next/server";
import { getPlatformTechnologyContent } from "@/lib/platform-content/technologyContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformTechnologyContent(locale);

  return NextResponse.json(content);
}
