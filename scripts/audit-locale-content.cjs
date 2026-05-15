const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const {MongoClient} = require('mongodb');

const projectRoot = path.resolve(__dirname, '..');
const SUPPORTED_LOCALES = ['da', 'de', 'en', 'fi', 'fr', 'ja', 'ko', 'nl', 'th', 'zh'];

const CONTENT_CHECKS = [
    {
        label: 'homepage',
        envKey: 'MONGODB_COLLECTION_HOMEPAGE_CONTENT',
        defaultCollection: 'homepage_content',
        requiredFields: [
            'heroSection',
            'humanDailyFlow',
            'localToGlobal',
            'systemExplainers',
            'mobilityFocus',
            'citySystems',
            'globalPatterns',
            'urbanSignals',
            'editorialPositioning',
            'smartCityMain',
            'smartCityHighlight',
            'smartCityTags',
        ],
    },
    {
        label: 'layout',
        envKey: 'MONGODB_COLLECTION_LAYOUT_CONTENT',
        defaultCollection: 'layout_content',
        requiredFields: ['navbar', 'footer', 'consent', 'languageOptions'],
    },
    {
        label: 'smart-food-ai',
        envKey: 'MONGODB_COLLECTION_SMART_FOOD_AI_CONTENT',
        defaultCollection: 'smart_food_ai_content',
        requiredFields: ['hero', 'proof', 'workflow', 'features', 'value', 'futureDirections'],
    },
];

function parseArgs() {
    const options = {
        envFile: '.env.production',
    };

    for (const arg of process.argv.slice(2)) {
        if (arg.startsWith('--env=')) {
            options.envFile = arg.split('=')[1];
        }
    }

    return options;
}

function loadEnv(envFile) {
    const envPath = path.join(projectRoot, envFile);

    if (fs.existsSync(envPath)) {
        dotenv.config({path: envPath});
    } else {
        dotenv.config();
    }

    const requiredKeys = ['MONGODB_URI', 'MONGODB_DATABASE'];
    const missingKeys = requiredKeys.filter((key) => !process.env[key]);

    if (missingKeys.length > 0) {
        throw new Error(`Missing required env keys: ${missingKeys.join(', ')}`);
    }

    return {
        envFile,
        database: process.env.MONGODB_DATABASE,
        uri: process.env.MONGODB_URI,
    };
}

function getMissingFields(document, requiredFields) {
    return requiredFields.filter((field) => document[field] === undefined);
}

async function auditCollection(db, check) {
    const collectionName = process.env[check.envKey] || check.defaultCollection;
    const collection = db.collection(collectionName);
    const issues = [];

    for (const locale of SUPPORTED_LOCALES) {
        const document = await collection.findOne({locale});

        if (!document) {
            issues.push({
                collection: check.label,
                locale,
                issue: 'missing locale document',
                fields: [],
            });
            continue;
        }

        const missingFields = getMissingFields(document, check.requiredFields);

        if (missingFields.length > 0) {
            issues.push({
                collection: check.label,
                locale,
                issue: 'missing required fields',
                fields: missingFields,
            });
        }
    }

    return {
        collection: check.label,
        collectionName,
        issues,
    };
}

function printReport(results, env) {
    const issueCount = results.reduce((total, result) => total + result.issues.length, 0);

    console.log(`Locale content audit`);
    console.log(`Environment: ${env.envFile}`);
    console.log(`Database: ${env.database}`);
    console.log(`Locales: ${SUPPORTED_LOCALES.join(', ')}`);
    console.log('');

    for (const result of results) {
        console.log(`${result.collection}: ${result.collectionName}`);

        if (result.issues.length === 0) {
            console.log('  OK');
            continue;
        }

        for (const issue of result.issues) {
            const fieldText = issue.fields.length > 0 ? ` (${issue.fields.join(', ')})` : '';
            console.log(`  ${issue.locale}: ${issue.issue}${fieldText}`);
        }
    }

    console.log('');
    console.log(issueCount === 0 ? 'Audit passed.' : `Audit failed with ${issueCount} issue(s).`);
}

async function main() {
    const options = parseArgs();
    const env = loadEnv(options.envFile);
    const client = new MongoClient(env.uri, {
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
    });

    await client.connect();

    try {
        const db = client.db(env.database);
        const results = [];

        for (const check of CONTENT_CHECKS) {
            results.push(await auditCollection(db, check));
        }

        printReport(results, env);

        const hasIssues = results.some((result) => result.issues.length > 0);
        process.exitCode = hasIssues ? 1 : 0;
    } finally {
        await client.close();
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
