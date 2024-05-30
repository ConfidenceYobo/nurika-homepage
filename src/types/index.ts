export type URLS = {
  celo: string;
  bsc: string;
  matic: string;
};

export type Environments = {
  development: URLS;
  production: URLS;
  test: URLS;
};

export type NodeEnv = "development" | "production" | "test";
