import React from "react";
import Image from "next/image";
import type { SmartMobilityChiangMaiContentPayload } from "@/lib/model/ISmartMobilityChiangMai";
import {
  ISmartRoute,
  ISmartSection,
  IVertiport,
} from "@/lib/model/ISmartMobility";
import SmartMobilityActions from "../SmartMobilityActions";
import BottomChiangMai from "./BottomChiangMai";
import RightChiangMai from "./RightChiangMai";

function getPrimaryContent(content: SmartMobilityChiangMaiContentPayload) {
  return content.primaryContent as ISmartSection | ISmartRoute | IVertiport;
}

function renderBottomChiangMai({
  lang,
  content,
}: {
  lang: string;
  content: SmartMobilityChiangMaiContentPayload;
}) {
  const bottomProps = {
    lang,
    bottomCards: content.bottomCards,
    safeStatement: content.safeStatement,
  };

  switch (content.pageType) {
    case "route":
      return (
        <BottomChiangMai
          {...bottomProps}
          pageType="route"
          primaryContent={content.primaryContent as ISmartRoute}
          connectivityMatrix={content.connectivityMatrix!}
        />
      );
    case "urbanHub":
      return (
        <BottomChiangMai
          {...bottomProps}
          pageType="urbanHub"
          primaryContent={content.primaryContent as ISmartSection}
        />
      );
    case "vertiport":
      return (
        <BottomChiangMai
          {...bottomProps}
          pageType="vertiport"
          primaryContent={content.primaryContent as IVertiport}
        />
      );
    case "vision":
      return <BottomChiangMai {...bottomProps} pageType="vision" />;
  }
}

export default function MainChiangMai({
  lang,
  content,
}: {
  lang: string;
  content: SmartMobilityChiangMaiContentPayload;
}) {
  const primaryContent = getPrimaryContent(content);

  return (
    <div className="portfolio-details-area smart-container-top">
      <div className="container">
        <div className="smart-mobility-premium__header">
          <div className="smart-mobility-premium__heading">
            <p className="smart-mobility-premium__eyebrow">
              Smart Mobility Chiang Mai
            </p>
            <h1>{primaryContent.title}</h1>
          </div>
          <p>{primaryContent.description}</p>
        </div>

        <SmartMobilityActions
          locale={lang}
          activeSlug={content.slug}
          style={{ marginBottom: 18 }}
        />

        <div className="row">
          <div className="col-lg-8">
            <div className="portfolio-details-image neo-image-container">
              {primaryContent.media?.image_url ? (
                <Image
                  src={primaryContent.media.image_url}
                  alt="portfolio"
                  width={1000}
                  height={600}
                />
              ) : null}
            </div>

            <div className="neo-tag">
              {primaryContent.media?.image_tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {renderBottomChiangMai({ lang, content })}
          </div>

          <RightChiangMai lang={lang} rightItems={content.rightItems} />
        </div>
      </div>
    </div>
  );
}
