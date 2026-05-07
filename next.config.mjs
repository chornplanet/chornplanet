// next.config.mjs

async function redirectIncorrectPublic() {
    const locales = ['th', 'en', 'fr', 'ja', 'zh', 'de', 'nl', 'da', 'fi', 'ko']
    const items = [{source: '/na/:path*', destination: '/da/:path*', permanent: true}, {
        source: `/public/`, destination: '/en', permanent: true
    }]

    for (const locale of locales) {
        items.push({
            source: `/public${locale}/`, destination: `/${locale}`, permanent: true,
        })
    }

    return items
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, basePath: '', // Add the base path if your app is hosted in a subpath

    async headers() {
        return [
            // Security headers applied to all routes
            {
                source: "/:path*",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff"
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY"
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin"
                    },
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=()"
                    },
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains"
                    },
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com data:",
                            "img-src 'self' data: blob: https://cdn.chornplanet.com https://scdn.line-apps.com https://www.google-analytics.com",
                            "connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com",
                            "frame-src 'self' https://www.google.com",
                            "frame-ancestors 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                        ].join("; ")
                    },
                ]
            },
            // Cache headers for static assets
            {
                source: "/images/:path*",
                headers: [{
                    key: "Cache-Control", value: "public, max-age=31536000, immutable"
                }]
            },
            {
                source: "/smart-mobility/:path*",
                headers: [{
                    key: "Cache-Control", value: "public, max-age=31536000, immutable"
                }]
            },
            {
                source: "/smart-city/:path*",
                headers: [{
                    key: "Cache-Control", value: "public, max-age=31536000, immutable"
                }]
            },
            {
                source: "/images-opengraph/:path*",
                headers: [{
                    key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400"
                }]
            }
        ]
    },

    images: {
        // Images are pre-optimized WebP files served from CDN via redirects.
        // Next.js optimizer cannot follow those redirects, so optimization is bypassed.
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.chornplanet.com'
            },
            {
                protocol: "https",
                hostname: "scdn.line-apps.com",
            },
        ], minimumCacheTTL: 31536000, qualities: [80],
    },

    // Use rewrite for OpenGraph images only
    async rewrites() {
        return [
            {
                source: '/images-opengraph/smart-mobility/:path*',
                destination: 'https://cdn.chornplanet.com/smart-mobility/:path*'
            },
            {
                source: '/images-opengraph/smart-city/:path*',
                destination: 'https://cdn.chornplanet.com/smart-city/:path*'
            },
            {
                source: '/images-opengraph/smart-food/:path*',
                destination: 'https://cdn.chornplanet.com/smart-food/:path*'
            },
            {
                source: '/images-opengraph/:path*',
                destination: 'https://cdn.chornplanet.com/images-opengraph/:path*'
            },
        ];
    },

    // Use redirects for general images
    async redirects() {
        return [
            {
                source: '/images/:path*',
                destination: 'https://cdn.chornplanet.com/images/:path*',
                permanent: true,
            },

            // Smart Mobility
            {
                source: '/:lang/smart-mobility/',
                destination: '/:lang/smart-mobility/chiang-mai/vision-smart-mobility-northern-gateway',
                permanent: true,
            },
            {
                source: '/smart-mobility/:path*',
                destination: 'https://cdn.chornplanet.com/smart-mobility/:path*',
                permanent: true,
            },

            // Smart City
            {
                source: '/smart-city/:path*',
                destination: 'https://cdn.chornplanet.com/smart-city/:path*',
                permanent: true,
            },

            // Smart Food
            {
                source: '/smart-food/:path*',
                destination: 'https://cdn.chornplanet.com/smart-food/:path*',
                permanent: true,
            },

            // Technology
            {
                source: '/:lang/technology/',
                destination: '/:lang/technical-expertise/web-development/',
                permanent: true,
            },

            // AI Integration
            {
                source: '/:lang/ai-integration/',
                destination: '/:lang/ai-companions/fah/',
                permanent: true,
            },

            //  About
            {
                source: '/:lang/about/',
                destination: '/:lang/about-chorn/',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
