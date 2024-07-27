import axios from "axios";
import { SetupData } from "../models/setupData";
import { CryptoData } from "../models/cryptoData";

interface CryptoResponse {
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

const fetchCryptoData = async ({
  code,
  currency,
}: {
  code: string;
  currency: string;
}) => {
  try {
    console.log(
      `Polling from 'https://api.livecoinwatch.com/coins/single' for coin: ${code} with currency: ${currency}`
    );
    const response = await axios.post<CryptoResponse>(
      `https://api.livecoinwatch.com/coins/single`,
      {
        currency,
        code,
        meta: true,
      },
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": process.env.COIN_WATCH_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${code}:`, error);
    throw error;
  }
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const pollCryptoData = async () => {
  try {
    const setup = await SetupData.findOne();
    if (!setup) {
      console.error("Setup data not found");
      return;
    }

    const { trackedCryptoCodes } = setup;
    if (!trackedCryptoCodes || trackedCryptoCodes.length === 0) {
      console.error("No crypto codes to track");
      return;
    }

    for (const code of trackedCryptoCodes) {
      const cryptoData = await fetchCryptoData({
        code,
        currency: setup["currency"],
      });
      cryptoData["code"] = code;
      cryptoData["currency"] = setup["currency"];
      await CryptoData.create(cryptoData);
      await delay(1000); //to avoid too many requests response on the api
    }
  } catch (error) {
    console.error("Error during polling:", error);
  }
};

export { pollCryptoData };
