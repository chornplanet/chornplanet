"use client";

import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import ServicesDetailsDotNetCore from "@/components/Services/fullstack-development/dotnetcore/ServicesDetailsDotNetCore";
import ServicesDetailsGoLang from "@/components/Services/fullstack-development/go-lang/ServicesDetailsGoLang";
import ServicesDetailsJava from "@/components/Services/fullstack-development/java/ServicesDetailsJava";
import ServicesDetailsNodejs from "@/components/Services/fullstack-development/nodejs/ServicesDetailsNodejs";
import ServicesDetailsPhp from "@/components/Services/fullstack-development/php/ServicesDetailsPhp";
import ServicesDetailsPython from "@/components/Services/fullstack-development/python/ServicesDetailsPython";
import type { IDevOps } from "@/lib/model/IDevOps";
import type { IFrontEnd } from "@/lib/model/IFrontEnd";
import type { IFullStack, IFullStackStack } from "@/lib/model/IFullStack";
import type { PlatformFullstackContent } from "@/lib/platform-content/fullstackContent";
import {
  getFullstackRouteBySlug,
  getFullstackStack,
  type FullstackStackKey,
} from "@/lib/platform-content/fullstackRoutes";
import { usePlatformFullstackContent } from "@/lib/platform-content/usePlatformFullstackContent";
import type { ComponentType } from "react";

type DetailComponentProps = {
  lang: string;
  stack: IFullStackStack;
  frontEnd: IFrontEnd;
  fullStack: IFullStack;
  devOps: IDevOps;
};

const detailComponents: Record<FullstackStackKey, ComponentType<DetailComponentProps>> = {
  dotnetcore: ServicesDetailsDotNetCore,
  go: ServicesDetailsGoLang,
  java: ServicesDetailsJava,
  nodejs: ServicesDetailsNodejs,
  php: ServicesDetailsPhp,
  python: ServicesDetailsPython,
};

export default function PlatformFullStackDetailPage({
  lang,
  slug,
  content,
}: {
  lang: string;
  slug: string;
  content: PlatformFullstackContent;
}) {
  const { data: cachedContent } = usePlatformFullstackContent(lang, content);
  const fullstackContent = cachedContent ?? content;
  const route = getFullstackRouteBySlug(slug);

  if (!route) {
    return null;
  }

  const DetailComponent = detailComponents[route.stackKey];
  const stack = getFullstackStack(fullstackContent.fullStack, route);

  return (
    <div>
      <DetailComponent
        lang={lang}
        stack={stack}
        frontEnd={fullstackContent.frontEnd}
        fullStack={fullstackContent.fullStack}
        devOps={fullstackContent.devOps}
      />
      <SchemaMarkupServicePage
        name={route.schema.name}
        description={route.schema.description}
        url={route.schema.url}
      />
    </div>
  );
}
