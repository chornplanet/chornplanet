import systemCapabilitiesContent from "@/components/Services/WebDevelopment/systemCapabilities.json";

type SystemCapabilityItem = {
  title: string;
  description: string;
  layer: string;
  tone: "enterprise" | "execution" | "control" | "physical";
};

type SystemCapabilitiesLocale = keyof typeof systemCapabilitiesContent;

const defaultSystemCapabilities =
  systemCapabilitiesContent.en as SystemCapabilityItem[];

function resolveSystemCapabilityLocale(lang: string): SystemCapabilitiesLocale {
  const normalizedLang = lang === "zh" ? "zh_CN" : lang;

  if (normalizedLang in systemCapabilitiesContent) {
    return normalizedLang as SystemCapabilitiesLocale;
  }

  return "en";
}

function getSystemCapabilities(lang: string): SystemCapabilityItem[] {
  return (
    (systemCapabilitiesContent[resolveSystemCapabilityLocale(lang)] as
      | SystemCapabilityItem[]
      | undefined) ?? defaultSystemCapabilities
  );
}

export default function SystemCapability({ lang }: { lang: string }) {
  const systemCapabilities = getSystemCapabilities(lang);

  return (
    <div
      className="system-capability system-capability__grid"
      aria-label="System Capability"
    >
      {systemCapabilities.map((item, index) => (
        <article
          className={`system-capability__card system-capability__card--${item.tone}`}
          key={item.title}
        >
          <div className="system-capability__meta">
            <div className="system-capability__index">
              {String(index + 1).padStart(2, "0")}
            </div>
            <span>{item.layer}</span>
          </div>

          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
