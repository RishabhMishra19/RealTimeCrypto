import axios from "axios";
import {
  CoinWatchCryptoListResponse,
  CoinWatchCryptoResponse,
} from "../types/coinWatch.types";

const COIN_WATCH_BASE_URL = "https://api.livecoinwatch.com";

const fetchCryptoData = async ({
  code,
  currency,
}: {
  code: string;
  currency: string;
}) => {
  try {
    console.log(
      `Polling from '${COIN_WATCH_BASE_URL}/coins/single' for coin: ${code} with currency: ${currency}`
    );
    const response = await axios.post<CoinWatchCryptoResponse>(
      `${COIN_WATCH_BASE_URL}/coins/single`,
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

const fetchCryptoList = async () => {
  try {
    const response = await axios.post<CoinWatchCryptoListResponse[]>(
      `${COIN_WATCH_BASE_URL}/coins/list`,
      {
        meta: false,
        limit: 100,
        offset: 0,
        sort: "rank",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.COIN_WATCH_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching crypto list:", error);
    throw error;
  }
};

export { fetchCryptoData, fetchCryptoList };
