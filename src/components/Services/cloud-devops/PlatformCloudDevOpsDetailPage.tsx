"use client";

import { SchemaMarkupServicePage } from "@/components/GoogleSchemaMarkup/SchemaMarkupServicePage";
import ServicesDetailsAppium from "@/components/Services/cloud-devops/appium/ServicesDetailsAppium";
import ServicesDetailsDocker from "@/components/Services/cloud-devops/docker/ServicesDetailsDocker";
import ServicesDetailsGitHub from "@/components/Services/cloud-devops/github/ServicesDetailsGitHub";
import ServicesDetailsGitLab from "@/components/Services/cloud-devops/gitlab/ServicesDetailsGitLab";
import ServicesDetailsJenkins from "@/components/Services/cloud-devops/jenkins/ServicesDetailsJenkins";
import ServicesDetailsKubernetes from "@/components/Services/cloud-devops/kubernetes/ServicesDetailsKubernetes";
import ServicesDetailsPostman from "@/components/Services/cloud-devops/postman/ServicesDetailsPostman";
import ServicesDetailsSelenium from "@/components/Services/cloud-devops/selenium/ServicesDetailsSelenium";
import ServicesDetailsSoapUI from "@/components/Services/cloud-devops/soapui/ServicesDetailsSoapUI";
import type { IDevOps, IDevOpsStack } from "@/lib/model/IDevOps";
import type { IFrontEnd } from "@/lib/model/IFrontEnd";
import type { IFullStack } from "@/lib/model/IFullStack";
import type { PlatformCloudDevopsContent } from "@/lib/platform-content/cloudDevopsContent";
import {
  getCloudDevopsRouteBySlug,
  getCloudDevopsStack,
  type CloudDevopsStackKey,
} from "@/lib/platform-content/cloudDevopsRoutes";
import { usePlatformCloudDevopsContent } from "@/lib/platform-content/usePlatformCloudDevopsContent";
import type { ComponentType } from "react";

type DetailComponentProps = {
  lang: string;
  stack: IDevOpsStack;
  frontEnd: IFrontEnd;
  fullStack: IFullStack;
  devOps: IDevOps;
};

const detailComponents: Record<CloudDevopsStackKey, ComponentType<DetailComponentProps>> = {
  appium: ServicesDetailsAppium,
  docker: ServicesDetailsDocker,
  github: ServicesDetailsGitHub,
  gitlab: ServicesDetailsGitLab,
  jenkins: ServicesDetailsJenkins,
  kubernetes: ServicesDetailsKubernetes,
  postman: ServicesDetailsPostman,
  selenium: ServicesDetailsSelenium,
  soapui: ServicesDetailsSoapUI,
};

export default function PlatformCloudDevOpsDetailPage({
  lang,
  slug,
  content,
}: {
  lang: string;
  slug: string;
  content: PlatformCloudDevopsContent;
}) {
  const { data: cachedContent } = usePlatformCloudDevopsContent(lang, content);
  const cloudDevopsContent = cachedContent ?? content;
  const route = getCloudDevopsRouteBySlug(slug);

  if (!route) {
    return null;
  }

  const DetailComponent = detailComponents[route.stackKey];
  const stack = getCloudDevopsStack(cloudDevopsContent.devOps, route);

  return (
    <div>
      <DetailComponent
        lang={lang}
        stack={stack}
        frontEnd={cloudDevopsContent.frontEnd}
        fullStack={cloudDevopsContent.fullStack}
        devOps={cloudDevopsContent.devOps}
      />
      <SchemaMarkupServicePage
        name={route.schema.name}
        description={route.schema.description}
        url={route.schema.url}
      />
    </div>
  );
}
