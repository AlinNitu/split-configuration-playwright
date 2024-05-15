interface EnvConfig {
    baseURL: string;
    selectors: {
        searchBox: string;
    };
    messages: {
        title: string;
    };
}

const env: { [key: string]: EnvConfig } = {
    production: {
        baseURL: 'https://www.google.com/',
        selectors: {
            searchBox: 'input[name="search"]',
        },
        messages: {
            title: 'Google',
        },
    },
    staging: {
        baseURL: 'https://www.stg-google.com/',
        selectors: {
            searchBox: 'input[name="search-staging"]',
        },
        messages: {
            title: 'Staging Google',
        },
    },
};

export const getEnv = (envName: string): EnvConfig => env[envName];
