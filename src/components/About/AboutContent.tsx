import React from "react";
import AboutLeft from "@/components/About/AboutLeft";
import AboutRight from "@/components/About/AboutRight";
import { AboutContentMedia, IAbout } from "@/lib/model/IAbout";

export default function AboutContent({
  about,
  media,
}: {
  about: IAbout;
  media: AboutContentMedia;
}) {
  return (
    <>
      <div className="about-area about-chorn-premium-area pb-70">
        <div className="container">
          <div className="premium-page-heading about-chorn-premium-heading">
            <h1>{about.title} Chorn Planet</h1>
          </div>
          <div className="row about-chorn-premium-grid pt-2">
            <AboutLeft media={media} />
            <AboutRight about={about} />
          </div>
        </div>
      </div>
    </>
  );
}
