import cloudDevopsSeed from "@/data/technical-expertise/en.cloud-devops.json";
import type { IDevOps, IDevOpsStack } from "@/lib/model/IDevOps";

export type CloudDevopsStackKey = Exclude<
  keyof IDevOps,
  "title" | "span" | "subTitle" | "stacks" | "services"
>;

export type CloudDevopsMetadataKey =
  | "appium"
  | "docker"
  | "github"
  | "gitlab"
  | "jenkins"
  | "kubernetes"
  | "postman"
  | "selenium"
  | "soapui";

export type CloudDevopsRouteConfig = {
  slug: string;
  stackKey: CloudDevopsStackKey;
  metadataKey: CloudDevopsMetadataKey;
  schema: {
    name: string;
    description: string;
    url: string;
  };
};

const cloudDevopsRoutes =
  cloudDevopsSeed.routes as unknown as CloudDevopsRouteConfig[];

export function getCloudDevopsRoutes(): CloudDevopsRouteConfig[] {
  return cloudDevopsRoutes;
}

export function getCloudDevopsRouteBySlug(
  slug: string,
): CloudDevopsRouteConfig | undefined {
  return cloudDevopsRoutes.find((route) => route.slug === slug);
}

export function getCloudDevopsStack(
  devOps: IDevOps,
  route: CloudDevopsRouteConfig,
): IDevOpsStack {
  return devOps[route.stackKey] as IDevOpsStack;
}
