import {NextRequest, NextResponse} from "next/server";
import {getSmartFoodAiContentForPublicPage} from "@/lib/smart-food-ai-content/smartFoodAiContent.service";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getSmartFoodAiContentForPublicPage(locale);

  return NextResponse.json(content);
}
