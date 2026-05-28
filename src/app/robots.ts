import {MetadataRoute} from 'next';

export const dynamic = 'force-static'; // Ensures static generation

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/openai', '/_next/static/'],
            },
        ],
        sitemap: [
            'https://www.chornplanet.com/sitemap.xml',
        ],
    };
}
