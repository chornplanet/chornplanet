declare module "*.mjs" {
    const value: unknown;
    export default value;
    export const getLegacyPublicRedirects: () => Array<{
        source: string;
        destination: string;
        permanent: boolean;
    }>;
    export const redirectIncorrectPublic: () => Promise<Array<{
        source: string;
        destination: string;
        permanent: boolean;
    }>>;
}
