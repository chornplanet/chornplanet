import React from "react";
import SmartCityBottomImage from "@/components/SmartCity/ChiangMai/SmartCityBottomImage";
import {
  ISmartRoute,
  ISmartSection,
  IVertiport,
} from "@/lib/model/ISmartMobility";
import ClarificationStatement from "./ClarificationStatement";

type BottomCards = Array<ISmartSection | ISmartRoute>;
type ConnectivityMatrix = { title: string; description: string };

type BottomChiangMaiProps =
  | {
      pageType: "route";
      lang: string;
      primaryContent: ISmartRoute;
      connectivityMatrix: ConnectivityMatrix;
      bottomCards: BottomCards;
      safeStatement?: ISmartSection["safeStatement"];
    }
  | {
      pageType: "urbanHub";
      lang: string;
      primaryContent: ISmartSection;
      bottomCards: BottomCards;
      safeStatement?: ISmartSection["safeStatement"];
    }
  | {
      pageType: "vertiport";
      lang: string;
      primaryContent: IVertiport;
      bottomCards: BottomCards;
      safeStatement?: ISmartSection["safeStatement"];
    }
  | {
      pageType: "vision";
      lang: string;
      bottomCards: BottomCards;
      safeStatement?: ISmartSection["safeStatement"];
    };

function RouteContent({
  route,
  connectivityMatrix,
}: {
  route: ISmartRoute;
  connectivityMatrix: ConnectivityMatrix;
}) {
  return (
    <>
      <div className="unique-features-container">
        <h3>{connectivityMatrix.title}</h3>
      </div>

      <p>{connectivityMatrix.description}</p>

      <h3>{route.title}</h3>
      <p>{route.transportationModel.title}</p>
      <p>{route.transportationModel.description}</p>
      <ul className="feature-list">
        {route.transportationModel.sections?.map((item, index) => (
          <li key={index} className="feature-item">
            <div className="feature-icon-container">
              <div className="feature-icon">
                <i className="flaticon-check"></i>
              </div>
              <div className="feature-title">{item.title}</div>
            </div>
            <div className="feature-content">{item.description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

function UrbanHubContent({ urbanHub }: { urbanHub: ISmartSection }) {
  return (
    <>
      <div className="unique-features-container">
        <h3>{urbanHub.title}</h3>
      </div>

      <p>{urbanHub.description}</p>

      <ul className="feature-list">
        {urbanHub.items?.map((item, index) => (
          <li key={index} className="feature-item">
            <div className="feature-icon-container">
              <div className="feature-icon">
                <i className="flaticon-check"></i>
              </div>
              <div className="feature-title">{item.title}</div>
            </div>
            <div className="feature-content">
              {item.description}
              {item.contents ? (
                <ul className="feature-list">
                  {item.contents.map((content, contentIndex) => (
                    <li key={contentIndex} className="feature-item">
                      {content.title} - {content.description}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function VertiportContent({ vertiport }: { vertiport: IVertiport }) {
  return (
    <>
      <div className="unique-features-container">
        <h3>{vertiport.title}</h3>
      </div>

      <p>{vertiport.description}</p>
      <h3>{vertiport.structureTitle}</h3>

      <ul className="feature-list">
        {vertiport.structure.map((structure, index) => (
          <li key={index} className="feature-item">
            <div className="feature-icon-container">
              <div className="feature-icon">
                <i className="flaticon-check"></i>
              </div>
              <div className="feature-title">{structure.title}</div>
            </div>
            <div className="feature-content">
              {structure.items.map((item, itemIndex) => (
                <p className="feature-description-vertiport" key={itemIndex}>
                  {item.title}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function renderBottomContent(props: BottomChiangMaiProps) {
  switch (props.pageType) {
    case "route":
      return (
        <RouteContent
          route={props.primaryContent}
          connectivityMatrix={props.connectivityMatrix}
        />
      );
    case "urbanHub":
      return <UrbanHubContent urbanHub={props.primaryContent} />;
    case "vertiport":
      return <VertiportContent vertiport={props.primaryContent} />;
    case "vision":
      return null;
  }
}

export default function BottomChiangMai(props: BottomChiangMaiProps) {
  return (
    <div className="portfolio-details-desc portfolio-details-desc-custom">
      {renderBottomContent(props)}

      <SmartCityBottomImage
        lang={props.lang}
        bottomCards={props.bottomCards}
      />

      <ClarificationStatement
        lang={props.lang}
        safeStatement={props.safeStatement}
      />
    </div>
  );
}
