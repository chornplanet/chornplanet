import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import sofaCoupleStory from "@/data/story/sofa-couple/en.sofa-couple.json";

export default function PlatformStorySection({
  lang,
  showStoryLink = true,
  showTiktokLink = false,
}: {
  lang: string;
  showStoryLink?: boolean;
  showTiktokLink?: boolean;
}) {
  return (
    <>
      <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--intro">
        <div className="platform-section__header platform-home-sofa-story__section1">
          <span>{"Circulatory System Story"}</span>
          <h2>{"Turn circulatory system into scenes and stories"}</h2>
          <p>
            A soft future-lifestyle story where MTS is more than transport: it
            carries a couple from the rhythm of the valley line back into the
            warmth of home, love, rest and everyday civilization.
          </p>
        </div>
      </section>

      <section className="platform-story-landscape-hero">
        <Image
          className="platform-story-landscape-hero__image"
          src={sofaCoupleStory.imageLandscape.src}
          alt={sofaCoupleStory.imageLandscape.alt}
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="platform-shell platform-outfit-detail-related platform-home-sofa-story platform-home-sofa-story--feature">
        <div
          className="platform-home-sofa-story__section2 platform-home-sofa-story__content"
          aria-labelledby="platform-home-sofa-story-title"
        >
          <div className="platform-home-sofa-story__copy">
            <span>Future Home Story</span>
            <h3 id="platform-home-sofa-story-title">
              {sofaCoupleStory.title}
            </h3>
            <p>{sofaCoupleStory.story}</p>
            <div className="platform-home-sofa-story__actions">
              {showStoryLink ? (
                <Link
                  className="platform-home-sofa-story__link"
                  href={`/${lang}/story/`}
                >
                  Open Story
                </Link>
              ) : null}
              {showStoryLink ? (
                <Link
                  className="platform-home-sofa-story__link platform-home-sofa-story__link--mobility"
                  href={`/${lang}/smart-mobility/`}
                >
                  Circulatory System
                </Link>
              ) : null}
              {showTiktokLink ? (
                <a
                  className="platform-outfit-detail-cta platform-home-sofa-story__tiktok"
                  href={sofaCoupleStory.tiktok}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="platform-outfit-detail-cta__icons"
                    aria-hidden="true"
                  >
                    <ShoppingBag
                      className="platform-outfit-detail-cta__shopping-icon"
                      size={18}
                      strokeWidth={2.4}
                    />
                    <FaTiktok className="platform-outfit-detail-cta__tiktok-icon" />
                  </span>
                  <span>Explore on TikTok</span>
                </a>
              ) : null}
            </div>
          </div>
          <div className="platform-home-sofa-story__cards">
            {sofaCoupleStory.images.slice(0, 4).map((storyImage) => (
              <figure
                key={storyImage.image.src}
                className="platform-home-sofa-story__card-media"
              >
                <div className="platform-home-sofa-story__card-image">
                  <Image
                    src={storyImage.image.src}
                    alt={storyImage.image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 18vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <figcaption>{storyImage.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
