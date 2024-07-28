export interface ICrypto {
  code: string;
  currency: string;
  name: string;
  symbol: string;
  rank: number;
  age: number;
  png32: string;
  exchanges: number;
  markets: number;
  allTimeHighUSD: number;
  rate: number;
  volume: number;
  cap: number;
  liquidity: number;
  delta: {
    hour: number;
    day: number;
    week: number;
    month: number;
    quarter: number;
    year: number;
  };
}

export type FetchCryptoDataRequest = {
  page: number;
  limit: number;
  cryptoCode: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export type FetchCryptoDataResponse = {
  data: ICrypto[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
};
