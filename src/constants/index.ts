import { Environments, NodeEnv } from "@/types";

export const NODE_ENV: NodeEnv = process.env.NODE_ENV as NodeEnv;

const MINTING_PAGE_URLS: Environments = {
    development: {
        celo: 'http://localhost:3001',
        bsc: 'http://localhost:3002',
        matic: 'http://localhost:3003'
    },
    production: {
        celo: 'http://celo.nurika.com',
        bsc: 'http://bsc.nurika.com',
        matic: 'http://polygon.nurika.com'
    },
    test: {
        celo: 'http://localhost:3001',
        bsc: 'http://localhost:3002',
        matic: 'http://localhost:3003'
    }
}

export const MINTING_PAGES = MINTING_PAGE_URLS[NODE_ENV];
