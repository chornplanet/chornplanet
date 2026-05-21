import {
    normalizeSmartFoodAiContentLocale,
    SmartFoodAiContentLocale,
    SmartFoodAiContentPayload,
} from "@/core/domain/smart-food-ai-content.entity";
import {ISmartFoodAiMetadataContent} from "@/lib/model/ISmartFoodAiContent";

export const SMART_FOOD_AI_STATIC_METADATA_FALLBACK: ISmartFoodAiMetadataContent = {
    title: 'Smart Food AI | Chorn Planet',
    description:
        'Smart Food AI by ChornPlanet presents an AI-native food service workflow for menu discovery, ordering support, operations coordination, and local business growth.',
    openGraphTitle: 'Smart Food AI',
};

const SMART_FOOD_AI_STATIC_METADATA_BY_LOCALE: Partial<Record<SmartFoodAiContentLocale, ISmartFoodAiMetadataContent>> = {
    en: SMART_FOOD_AI_STATIC_METADATA_FALLBACK,
    th: {
        title: 'Smart Food AI | Chorn Planet',
        description:
            'Smart Food AI โดย ChornPlanet นำเสนอเวิร์กโฟลว์บริการอาหารที่ใช้ AI เพื่อช่วยค้นหาเมนู สนับสนุนการสั่งอาหาร ประสานงานปฏิบัติการ และต่อยอดธุรกิจท้องถิ่น',
        openGraphTitle: 'Smart Food AI',
    },
};

export function getSmartFoodAiStaticMetadataFallback(locale: string): ISmartFoodAiMetadataContent {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    return SMART_FOOD_AI_STATIC_METADATA_BY_LOCALE[normalizedLocale] ?? SMART_FOOD_AI_STATIC_METADATA_FALLBACK;
}

export function getSmartFoodAiStaticFallback(locale: string): SmartFoodAiContentPayload {
    const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
    const image = {src: '/fallback-content.svg', alt: 'Smart Food AI service workflow'};

    if (normalizedLocale === 'th') {
        return {
            locale: normalizedLocale,
            metadata: getSmartFoodAiStaticMetadataFallback(normalizedLocale),
            hero: {
                eyebrow: 'แพลตฟอร์มบริการอาหารที่ใช้ AI',
                title: 'Smart Food AI',
                lead:
                    'Smart Food AI เชื่อมข้อมูลเมนู บทสนทนากับลูกค้า การประสานงานออเดอร์ และการทำงานของธุรกิจอาหารให้เป็นประสบการณ์บริการดิจิทัลที่ใช้งานได้จริง',
                support:
                    'ออกแบบจากเวิร์กโฟลว์ธุรกิจท้องถิ่นในเชียงใหม่ เพื่อแสดงความสามารถของ ChornPlanet ในการเปลี่ยนงานบริการอาหารให้เป็นแพลตฟอร์มที่ชัดเจนและขยายต่อได้',
                actionsLabel: 'การทำงานของ Smart Food AI',
                actions: [
                    {label: 'ดูเวิร์กโฟลว์', href: '#workflow', variant: 'primary'},
                    {label: 'คุณค่าทางธุรกิจ', href: '#value', variant: 'secondary'},
                ],
                visual: {
                    ...image,
                    alt: 'เวิร์กโฟลว์บริการ Smart Food AI',
                    ariaLabel: 'ภาพตัวอย่างประสบการณ์บริการ Smart Food AI',
                },
            },
            proof: {
                heading: {
                    eyebrow: 'ทิศทางการใช้งานจริง',
                    title: 'ออกแบบเพื่อการทำงานจริงของธุรกิจอาหาร',
                    text: 'Smart Food AI นำเสนอทิศทางผลิตภัณฑ์สำหรับงานบริการอาหาร การสื่อสารกับลูกค้า และการประสานงานธุรกิจด้วย AI',
                },
                paragraphs: [
                    'Smart Food AI สนับสนุนร้านอาหารและทีมบริการอาหารที่ต้องการสื่อสารเมนูให้ชัดเจน เตรียมออเดอร์ให้พร้อม ตรวจสอบการชำระเงิน และติดตามงานปฏิบัติการ',
                    'ทิศทางของแพลตฟอร์มให้ความสำคัญกับประสบการณ์ลูกค้าก่อน ช่วยให้ลูกค้าเข้าใจเมนู เลือกรายการ ยืนยันออเดอร์ และเดินต่อไปสู่การให้บริการได้ราบรื่น',
                ],
                image: {...image, alt: 'เวิร์กโฟลว์บริการ Smart Food AI'},
                cards: [
                    {
                        index: '01',
                        title: 'บทสนทนากับลูกค้า',
                        text: 'ช่วยลูกค้าค้นหาเมนู ถามรายละเอียดสินค้า รับคำแนะนำการสั่งอาหาร และสื่อสารบริการอย่างเป็นมิตร',
                    },
                    {
                        index: '02',
                        title: 'การประสานงานปฏิบัติการ',
                        text: 'ช่วยเชื่อมคำขอของลูกค้ากับงานหน้าร้าน การยืนยันการเงิน และขั้นตอนการเตรียมอาหาร',
                    },
                    {
                        index: '03',
                        title: 'ความพร้อมของแพลตฟอร์ม',
                        text: 'แสดงให้เห็นว่า ChornPlanet สามารถเปลี่ยนเวิร์กโฟลว์ธุรกิจจริงให้เป็นหน้าผลิตภัณฑ์ AI ที่ดูพรีเมียมและต่อยอดได้',
                    },
                ],
            },
            workflow: {
                id: 'workflow',
                heading: {
                    eyebrow: 'เวิร์กโฟลว์',
                    title: 'จากคำขอลูกค้าไปสู่การดำเนินงานบริการ',
                    text: 'มุมมองแบบครบวงจรของการที่ Smart Food AI ช่วยสนับสนุนงานบริการอาหาร',
                },
                steps: [
                    {
                        title: 'เข้าใจคำขอของลูกค้า',
                        text: 'รับคำถามภาษาธรรมชาติเกี่ยวกับเมนู ราคา ความพร้อมของสินค้า การสั่งอาหาร และรายละเอียดบริการ',
                        image: {...image, alt: 'เข้าใจคำขอของลูกค้า'},
                    },
                    {
                        title: 'ตอบกลับด้วยข้อมูลเมนูที่ชัดเจน',
                        text: 'ให้ข้อมูลเมนูและขั้นตอนถัดไปที่เป็นประโยชน์ พร้อมรักษาประสบการณ์ลูกค้าให้ง่ายและเป็นมิตร',
                        image: {...image, alt: 'แนะนำเมนูด้วย Smart Food AI'},
                    },
                    {
                        title: 'ประสานความพร้อมของออเดอร์',
                        text: 'สนับสนุนการส่งต่อจากการยืนยันของลูกค้าไปสู่การประมวลผลออเดอร์ การตรวจสอบการชำระเงิน และการเตรียมงาน',
                        image: {...image, alt: 'ประสานงานออเดอร์ Smart Food AI'},
                    },
                    {
                        title: 'พัฒนาวงจรบริการ',
                        text: 'ใช้ข้อมูลจากเวิร์กโฟลว์จริงเพื่อปรับปรุงความถูกต้องของเนื้อหา ตรรกะการทำงาน และความสามารถของแพลตฟอร์มในอนาคต',
                        image: {...image, alt: 'พัฒนาบริการ Smart Food AI'},
                    },
                ],
            },
            features: {
                heading: {
                    eyebrow: 'ความสามารถ',
                    title: 'AI ที่ช่วยธุรกิจอาหารเติบโตอย่างใช้งานได้จริง',
                },
                items: [
                    'สนับสนุนการค้นหาเมนูและการสั่งอาหารด้วยภาษาธรรมชาติ',
                    'ช่วยตอบคำถามเรื่องเมนู ราคา และบริการอย่างชัดเจน',
                    'สนับสนุนการประสานสถานะออเดอร์และการชำระเงิน',
                    'เชื่อมงานบริการลูกค้า การยืนยันการเงิน และการเตรียมงานของทีม',
                    'โครงสร้างพร้อมต่อยอดสู่เนื้อหาหลายภาษาและระบบฐานข้อมูล',
                    'ภาพลักษณ์พรีเมียมของ ChornPlanet สำหรับพาร์ทเนอร์ นักลงทุน และลูกค้าในอนาคต',
                ],
            },
            value: {
                id: 'value',
                heading: {
                    eyebrow: 'คุณค่าทางธุรกิจ',
                    title: 'หน้าผลิตภัณฑ์ AI ที่ต่อยอดได้จริง ไม่ใช่เพียงแนวคิด',
                    text: 'Smart Food AI ช่วยให้ ChornPlanet แสดงศักยภาพแพลตฟอร์มผ่านเวิร์กโฟลว์ที่ธุรกิจท้องถิ่นเข้าใจและนำไปใช้ต่อได้',
                },
                cards: [
                    {
                        title: 'ลูกค้าเข้าใจง่ายขึ้น',
                        text: 'ลูกค้าได้รับข้อมูลที่ชัดเจนขึ้นเกี่ยวกับตัวเลือกเมนู ราคา และขั้นตอนการสั่งอาหาร',
                    },
                    {
                        title: 'ทีมประสานงานดีขึ้น',
                        text: 'ทีมสามารถจัดแนวงานบริการลูกค้า การยืนยันการเงิน และการประมวลผลออเดอร์ได้เป็นระบบมากขึ้น',
                    },
                    {
                        title: 'วางตำแหน่งแพลตฟอร์มชัดขึ้น',
                        text: 'หน้านี้สื่อสารว่า ChornPlanet เป็นแพลตฟอร์ม AI ที่มีทิศทางการใช้งานจริงและเชิงพาณิชย์',
                    },
                ],
            },
            futureDirections: [
                'ขยายเนื้อหา Smart Food AI สำหรับพาร์ทเนอร์ ลูกค้า และเรื่องราวผลิตภัณฑ์ในอนาคต',
                'พัฒนา Smart Food AI ต่อเนื่องให้เป็นหน้าผลิตภัณฑ์บริการอาหารที่พร้อมใช้งานจริง',
                'รักษาภาษาสาธารณะที่ปลอดภัยและไม่เปิดเผยรายละเอียดสถาปัตยกรรมภายใน',
            ],
        };
    }

    return {
        locale: normalizedLocale,
        metadata: getSmartFoodAiStaticMetadataFallback(normalizedLocale),
        hero: {
            eyebrow: 'AI-native food service platform',
            title: 'Smart Food AI',
            lead:
                'Smart Food AI connects menu information, customer conversation, order coordination, and business operations into one practical AI-native service experience.',
            support:
                'Designed from real local-business workflow in Chiang Mai, the page presents ChornPlanet\'s capability to turn food-service operations into a clear, scalable digital platform.',
            actionsLabel: 'Smart Food AI actions',
            actions: [
                {label: 'Explore workflow', href: '#workflow', variant: 'primary'},
                {label: 'Business value', href: '#value', variant: 'secondary'},
            ],
            visual: {
                ...image,
                ariaLabel: 'Smart Food AI service experience visual',
            },
        },
        proof: {
            heading: {
                eyebrow: 'Production direction',
                title: 'Built for real food-service operations',
                text: 'Smart Food AI presents a clear product direction for AI-native food-service operations, customer communication, and business workflow support.',
            },
            paragraphs: [
                'Smart Food AI supports restaurant and food-service teams that need accurate menu communication, order readiness, payment confirmation, and operational follow-up.',
                'The platform direction focuses on practical customer experience first: helping people understand menus, choose items, confirm orders, and move smoothly toward fulfillment.',
            ],
            image,
            cards: [
                {
                    index: '01',
                    title: 'Customer conversation',
                    text: 'Support customers with menu discovery, item clarification, ordering guidance, and friendly service communication.',
                },
                {
                    index: '02',
                    title: 'Operational coordination',
                    text: 'Help connect customer requests with store operations, finance confirmation, and preparation flow.',
                },
                {
                    index: '03',
                    title: 'Platform readiness',
                    text: 'Show how ChornPlanet can transform a real business workflow into a premium AI-native product surface.',
                },
            ],
        },
        workflow: {
            id: 'workflow',
            heading: {
                eyebrow: 'Workflow',
                title: 'From customer request to service action',
                text: 'A simple end-to-end view of how Smart Food AI supports food-service operations.',
            },
            steps: [
                {
                    title: 'Understand the customer request',
                    text: 'Receive natural-language questions about menus, price, availability, ordering, and service details.',
                    image,
                },
                {
                    title: 'Respond with clear menu guidance',
                    text: 'Provide useful menu information and next-step guidance while keeping the customer experience friendly and simple.',
                    image,
                },
                {
                    title: 'Coordinate order readiness',
                    text: 'Support the handoff from customer confirmation to operational processing, payment review, and preparation flow.',
                    image,
                },
                {
                    title: 'Improve the service loop',
                    text: 'Use real workflow feedback to improve content accuracy, operational logic, and future platform capability.',
                    image,
                },
            ],
        },
        features: {
            heading: {
                eyebrow: 'Capabilities',
                title: 'Practical AI support for food-service growth',
            },
            items: [
                'Natural-language menu and ordering support',
                'Clear customer response flow for menu, price, and service questions',
                'Payment and order-status coordination support',
                'Operational handoff between customer service, finance, and preparation teams',
                'Content-ready structure for multilingual and database-backed publishing',
                'Premium ChornPlanet presentation for partners, investors, and future customers',
            ],
        },
        value: {
            id: 'value',
            heading: {
                eyebrow: 'Business value',
                title: 'A real AI-native product surface, not only a concept page',
                text: 'Smart Food AI helps ChornPlanet demonstrate practical platform capability through a workflow that local businesses can understand and use.',
            },
            cards: [
                {
                    title: 'Better customer clarity',
                    text: 'Customers receive clearer information about menu choices, prices, and ordering next steps.',
                },
                {
                    title: 'Better team coordination',
                    text: 'Teams can align customer service, finance confirmation, and order processing around a more structured workflow.',
                },
                {
                    title: 'Better platform positioning',
                    text: 'The page communicates ChornPlanet as an AI-native production platform with real commercial direction.',
                },
            ],
        },
        futureDirections: [
            'Continue expanding localized Smart Food AI content for partners, customers, and future product stories.',
            'Continue improving Smart Food AI as a production-ready food-service platform surface.',
            'Preserve safe public wording without exposing internal technical architecture.',
        ],
    };
}
