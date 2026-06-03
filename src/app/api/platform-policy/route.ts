import { NextRequest, NextResponse } from "next/server";
import { getPlatformPolicyContent } from "@/lib/platform-content/policyContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformPolicyContent(locale);

  return NextResponse.json(content);
}
