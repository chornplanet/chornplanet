import { NextRequest, NextResponse } from "next/server";
import { getPlatformTechnicalExpertiseContent } from "@/lib/platform-content/technicalExpertiseContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformTechnicalExpertiseContent(locale);

  return NextResponse.json(content);
}
