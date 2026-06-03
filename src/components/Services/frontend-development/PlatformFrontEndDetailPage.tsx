"use client";

import { notFound } from "next/navigation";
import ServicesDetailsAngular from "@/components/Services/frontend-development/angular/ServicesDetailsAngular";
import ServicesDetailsCss3 from "@/components/Services/frontend-development/css3/ServicesDetailsCss3";
import ServicesDetailsHtml5 from "@/components/Services/frontend-development/html5/ServicesDetailsHtml5";
import ServicesDetailsJavaScript from "@/components/Services/frontend-development/javascript/ServicesDetailsJavaScript";
import ServicesDetailsNextJS from "@/components/Services/frontend-development/nextjs/ServicesDetailsNextJS";
import ServicesDetailsReact from "@/components/Services/frontend-development/react/ServicesDetailsReact";
import ServicesDetailsTypeScript from "@/components/Services/frontend-development/typescript/ServicesDetailsTypeScript";
import ServicesDetailsVue from "@/components/Services/frontend-development/vue/ServicesDetailsVue";
import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import {
  getFrontendRouteBySlug,
  getFrontendStack,
  type FrontendStackKey,
} from "@/lib/platform-content/frontendRoutes";
import type { PlatformFrontendContent } from "@/lib/platform-content/frontendContent";
import { usePlatformFrontendContent } from "@/lib/platform-content/usePlatformFrontendContent";
import type { IFrontEnd, IFrontEndStack } from "@/lib/model/IFrontEnd";
import type { IFullStack } from "@/lib/model/IFullStack";
import type { IDevOps } from "@/lib/model/IDevOps";
import type { ComponentType } from "react";

type DetailComponentProps = {
  lang: string;
  stack: IFrontEndStack;
  frontEnd: IFrontEnd;
  fullStack: IFullStack;
  devOps: IDevOps;
};

const detailComponents: Record<FrontendStackKey, ComponentType<DetailComponentProps>> = {
  angular: ServicesDetailsAngular,
  css3: ServicesDetailsCss3,
  html5: ServicesDetailsHtml5,
  javascript: ServicesDetailsJavaScript,
  nextjs: ServicesDetailsNextJS,
  react: ServicesDetailsReact,
  typescript: ServicesDetailsTypeScript,
  vue: ServicesDetailsVue,
};

export default function PlatformFrontEndDetailPage({
  lang,
  slug,
  content,
}: {
  lang: string;
  slug: string;
  content: PlatformFrontendContent;
}) {
  const { data: cachedContent } = usePlatformFrontendContent(lang, content);
  const frontendContent = cachedContent ?? content;
  const route = getFrontendRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const DetailComponent = detailComponents[route.stackKey];
  const stack = getFrontendStack(frontendContent.frontEnd, route);

  return (
    <div>
      <DetailComponent
        lang={lang}
        stack={stack}
        frontEnd={frontendContent.frontEnd}
        fullStack={frontendContent.fullStack}
        devOps={frontendContent.devOps}
      />
      <SchemaMarkupServicePage
        name={route.schema.name}
        description={route.schema.description}
        url={route.schema.url}
      />
    </div>
  );
}
