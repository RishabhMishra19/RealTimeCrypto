export interface CoinWatchCryptoResponse {
  currency: string;
  code: string;
  name: string;
  symbol: string;
  rank: number;
  age: number;
  color: string;
  png32: string;
  png64: string;
  webp32: string;
  webp64: string;
  exchanges: number;
  markets: number;
  pairs: number;
  allTimeHighUSD: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  categories: string[];
  history: {
    date: number;
    rate: number;
    volume: number;
    cap: number;
  }[];
}

export interface CoinWatchCryptoListResponse {
  code: string;
}
