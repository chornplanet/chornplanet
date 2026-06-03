import frontendSeed from "@/data/technical-expertise/en.frontend.json";
import type { IFrontEnd, IFrontEndStack } from "@/lib/model/IFrontEnd";

export type FrontendStackKey = Exclude<
  keyof IFrontEnd,
  "title" | "span" | "subTitle" | "stacks" | "services"
>;

export type FrontendMetadataKey =
  | "angular"
  | "css3"
  | "html5"
  | "javascript"
  | "nextjs"
  | "react"
  | "typescript"
  | "vue";

export type FrontendRouteConfig = {
  slug: string;
  stackKey: FrontendStackKey;
  metadataKey: FrontendMetadataKey;
  schema: {
    name: string;
    description: string;
    url: string;
  };
};

const frontendRoutes = frontendSeed.routes as unknown as FrontendRouteConfig[];

export function getFrontendRoutes(): FrontendRouteConfig[] {
  return frontendRoutes;
}

export function getFrontendRouteBySlug(
  slug: string,
): FrontendRouteConfig | undefined {
  return frontendRoutes.find((route) => route.slug === slug);
}

export function getFrontendStack(
  frontEnd: IFrontEnd,
  route: FrontendRouteConfig,
): IFrontEndStack {
  return frontEnd[route.stackKey] as IFrontEndStack;
}
