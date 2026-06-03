import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlatformStorySection from "@/components/Story/PlatformStorySection";
import {
  getSmartMobilityContent,
  type MtsStation,
} from "@/lib/platform-content/smartMobilityContent";
import { getPlatformStoryContent } from "@/lib/platform-content/storyContent";

type PageParams = {
  params: Promise<{
    locale: string;
  }>;
};

function StoryMtsStationCard({
  locale,
  station,
}: {
  locale: string;
  station: MtsStation;
}) {
  return (
    <article className="platform-outfit-card platform-mts-card">
      <Link
        className="platform-outfit-card__link"
        href={`/${locale}/smart-mobility/mts/${station.slug}/`}
      >
        <div className="platform-outfit-card__media">
          <Image
            src={station.image.src}
            alt={station.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 31vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="platform-outfit-card__body">
          <span>{station.mts_station}</span>
          <h3>{station.name}</h3>
          <p>{station.story}</p>
          <div className="platform-outfit-card__meta">
            <strong>View Station</strong>
            <small>{station.mts_line}</small>
          </div>
        </div>
      </Link>
    </article>
  );
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale } = await params;
  const storyContent = getPlatformStoryContent(locale);
  const sofaCoupleStory = storyContent.sofaCoupleStory;
  const title = `${sofaCoupleStory.title} | Chorn Planet Story`;
  const description = sofaCoupleStory.story;
  const openGraphImage = sofaCoupleStory.openGraphImage;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/story/`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${locale}/story/`,
      images: [
        {
          url: openGraphImage.src,
          width: openGraphImage.imageGenerationSize.width,
          height: openGraphImage.imageGenerationSize.height,
          alt: sofaCoupleStory.imageLandscape.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage.src],
    },
  };
}

export default async function Page({ params }: PageParams) {
  const { locale } = await params;
  const storyContent = getPlatformStoryContent(locale);
  const smartMobilityContent = getSmartMobilityContent(locale);
  const valleyStations =
    smartMobilityContent.lines.find((line) => line.id === "valley")?.stations ??
    [];
  const coastalStations =
    smartMobilityContent.lines.find((line) => line.id === "coastal")
      ?.stations ?? [];
  const backlinkStations = [
    ...valleyStations.slice(0, 3),
    ...coastalStations.slice(0, 3),
  ];

  return (
    <main className="platform-page platform-home platform-story-index-page">
      <PlatformStorySection
        lang={locale}
        content={storyContent}
        showStoryLink={false}
        showTiktokLink
      />
      <section className="platform-shell platform-outfit-detail-related platform-story-mts-backlinks">
        <div className="platform-section__header">
          <span>MTS Backlinks</span>
          <h2>Continue the journey through Valley and Coastal stations.</h2>
          <p>
            Open the mobility stations connected to this homecoming story, from
            alpine valley arrival points to coastal future tourism districts.
          </p>
        </div>
        <div className="platform-outfit-detail-related__grid">
          {backlinkStations.map((station) => (
            <StoryMtsStationCard
              key={station.slug}
              locale={locale}
              station={station}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
