import { NextRequest, NextResponse } from "next/server";
import { getPlatformGalleryContent } from "@/lib/platform-content/galleryContent";

export async function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get("locale") || "en";
  const content = await getPlatformGalleryContent(locale);

  return NextResponse.json(content);
}
