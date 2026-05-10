import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
    ...nextCoreWebVitals,
    {
        ignores: [
            ".yarn/**",
            ".next/**",
            "out/**",
            "build/**",
            "coverage/**",
            "next-env.d.ts",
        ],
    },
];

export default eslintConfig;
