import Image from "next/image";
import Link from "next/link";

type ChatOrderingStep = {
  lang: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  link: string;
};

type HighlightSmartFoodUi = {
  eyebrow: string;
  imageAriaLabel: string;
  primaryAction: string;
  secondaryAction: string;
};

const chatOrderingStep: ChatOrderingStep[] = [
  {
    lang: "en",
    title: "AI Chat Ordering",
    text: "Customers can order through chat by selecting a meal, asking questions, or confirming their order in a simple conversation.",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Customer chat ordering interface for Smart Food",
    link: "/smart-food/",
  },
  {
    lang: "th",
    title: "การสั่งอาหารผ่านแชต AI",
    text: "ลูกค้าสามารถสั่งอาหารผ่านแชตได้ โดยเลือกเมนู สอบถามข้อมูล หรือยืนยันคำสั่งซื้อผ่านบทสนทนาที่เข้าใจง่าย",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "หน้าจอการสั่งอาหารผ่านแชตของลูกค้าสำหรับ Smart Food",
    link: "/smart-food/",
  },
  {
    lang: "da",
    title: "AI-chatbestilling",
    text: "Kunder kan bestille via chat ved at vælge et måltid, stille spørgsmål eller bekræfte deres bestilling i en enkel samtale.",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Kundegrænseflade til chatbestilling for Smart Food",
    link: "/smart-food/",
  },
  {
    lang: "de",
    title: "KI-Chat-Bestellung",
    text: "Kunden können per Chat bestellen, indem sie ein Gericht auswählen, Fragen stellen oder ihre Bestellung in einem einfachen Gespräch bestätigen.",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Chat-Bestelloberfläche für Kunden von Smart Food",
    link: "/smart-food/",
  },
  {
    lang: "fi",
    title: "AI-chat-tilaaminen",
    text: "Asiakkaat voivat tilata chatin kautta valitsemalla aterian, esittämällä kysymyksiä tai vahvistamalla tilauksensa yksinkertaisessa keskustelussa.",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Asiakkaan chat-tilausnäkymä Smart Food -palvelussa",
    link: "/smart-food/",
  },
  {
    lang: "fr",
    title: "Commande par chat IA",
    text: "Les clients peuvent commander par chat en choisissant un repas, en posant des questions ou en confirmant leur commande dans une conversation simple.",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Interface de commande par chat pour les clients de Smart Food",
    link: "/smart-food/",
  },
  {
    lang: "ja",
    title: "AIチャット注文",
    text: "顧客はチャットを通じて、食事を選択したり、質問したり、簡単な会話の中で注文を確認したりできます。",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Smart Food の顧客向けチャット注文インターフェース",
    link: "/smart-food/",
  },
  {
    lang: "ko",
    title: "AI 채팅 주문",
    text: "고객은 채팅을 통해 메뉴를 선택하고, 질문을 하거나, 간단한 대화 안에서 주문을 확인할 수 있습니다.",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Smart Food 고객용 채팅 주문 인터페이스",
    link: "/smart-food/",
  },
  {
    lang: "nl",
    title: "AI-chatbestelling",
    text: "Klanten kunnen via chat bestellen door een maaltijd te kiezen, vragen te stellen of hun bestelling in een eenvoudig gesprek te bevestigen.",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Chatbestelinterface voor klanten van Smart Food",
    link: "/smart-food/",
  },
  {
    lang: "zh",
    title: "AI 聊天点餐",
    text: "客户可以通过聊天选择餐品、提出问题，或在简单对话中确认订单。",
    image: "/smart-food/process1-chat-ordering.png",
    alt: "Smart Food 客户聊天点餐界面",
    link: "/smart-food/",
  },
];

const highlightSmartFoodUi: Record<string, HighlightSmartFoodUi> = {
  en: {
    eyebrow: "Smart Food AI showcase",
    imageAriaLabel: "Open Smart Food AI showcase",
    primaryAction: "Explore Smart Food AI",
    secondaryAction: "See the full workflow",
  },
  th: {
    eyebrow: "โชว์เคส Smart Food AI",
    imageAriaLabel: "เปิดหน้าโชว์เคส Smart Food AI",
    primaryAction: "สำรวจ Smart Food AI",
    secondaryAction: "ดูเวิร์กโฟลว์ทั้งหมด",
  },
  da: {
    eyebrow: "Smart Food AI showcase",
    imageAriaLabel: "Åbn Smart Food AI showcase",
    primaryAction: "Udforsk Smart Food AI",
    secondaryAction: "Se hele workflowet",
  },
  de: {
    eyebrow: "Smart Food AI Showcase",
    imageAriaLabel: "Smart Food AI Showcase öffnen",
    primaryAction: "Smart Food AI entdecken",
    secondaryAction: "Gesamten Workflow ansehen",
  },
  fi: {
    eyebrow: "Smart Food AI -esittely",
    imageAriaLabel: "Avaa Smart Food AI -esittely",
    primaryAction: "Tutustu Smart Food AI:hin",
    secondaryAction: "Katso koko työnkulku",
  },
  fr: {
    eyebrow: "Vitrine Smart Food AI",
    imageAriaLabel: "Ouvrir la vitrine Smart Food AI",
    primaryAction: "Explorer Smart Food AI",
    secondaryAction: "Voir tout le flux de travail",
  },
  ja: {
    eyebrow: "Smart Food AI ショーケース",
    imageAriaLabel: "Smart Food AI ショーケースを開く",
    primaryAction: "Smart Food AI を見る",
    secondaryAction: "ワークフロー全体を見る",
  },
  ko: {
    eyebrow: "Smart Food AI 쇼케이스",
    imageAriaLabel: "Smart Food AI 쇼케이스 열기",
    primaryAction: "Smart Food AI 살펴보기",
    secondaryAction: "전체 워크플로 보기",
  },
  nl: {
    eyebrow: "Smart Food AI showcase",
    imageAriaLabel: "Open de Smart Food AI showcase",
    primaryAction: "Ontdek Smart Food AI",
    secondaryAction: "Bekijk de volledige workflow",
  },
  zh: {
    eyebrow: "Smart Food AI 展示",
    imageAriaLabel: "打开 Smart Food AI 展示页面",
    primaryAction: "探索 Smart Food AI",
    secondaryAction: "查看完整流程",
  },
};

function getChatOrderingStep(lang: string): ChatOrderingStep {
  return (
    chatOrderingStep.find((step) => step.lang === lang) ??
    chatOrderingStep.find((step) => step.lang === "en") ??
    chatOrderingStep[0]
  );
}

function getHighlightSmartFoodUi(lang: string): HighlightSmartFoodUi {
  return highlightSmartFoodUi[lang] ?? highlightSmartFoodUi.en;
}

export default function HighlightSmartFood({ lang }: { lang: string }) {
  const step = getChatOrderingStep(lang);
  const ui = getHighlightSmartFoodUi(lang);
  const href = `/${lang}${step.link}`;

  return (
    <section
      id="smart-food-ai-highlight"
      className="highlight-smart-food"
      aria-labelledby="highlight-smart-food-title"
    >
      <div className="highlight-smart-food__grid">
        <Link
          className="highlight-smart-food__media"
          href={href}
          aria-label={ui.imageAriaLabel}
        >
          <Image
            src={step.image}
            alt={step.alt}
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </Link>

        <div className="highlight-smart-food__content">
          <p className="highlight-smart-food__eyebrow">{ui.eyebrow}</p>
          <h2 id="highlight-smart-food-title">{step.title}</h2>
          <p>{step.text}</p>

          <div className="highlight-smart-food__actions">
            <Link className="highlight-smart-food__button" href={href}>
              {ui.primaryAction}
            </Link>
            <Link className="highlight-smart-food__text-link" href={href}>
              {ui.secondaryAction}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
