import { CryptoData } from "../models/cryptoData";
import { CoinWatchCryptoResponse } from "../types/coinWatch.types";

interface GetCryptoDataOptions {
  page?: number;
  limit?: number;
  cryptoCode?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

const getCryptoDataWithPagination = async (options: GetCryptoDataOptions) => {
  try {
    const {
      page = 1,
      limit = 10,
      cryptoCode,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = options;

    if (page < 1 || limit < 1) {
      throw new Error("Page and limit must be positive integers");
    }

    const skip = (page - 1) * limit;

    let query: any = {};
    if (cryptoCode) {
      query.code = cryptoCode;
    }

    let dataQuery = CryptoData.find(query);

    const sortDirection = sortOrder === "desc" ? -1 : 1;
    dataQuery = dataQuery
      .sort({ [sortBy]: sortDirection })
      .skip(skip)
      .limit(limit);

    const [data, total] = await Promise.all([
      dataQuery.exec(),
      CryptoData.countDocuments(query),
    ]);

    return {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      data,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching crypto data: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const saveCryptoData = async ({
  payload,
}: {
  payload: CoinWatchCryptoResponse;
}) => {
  try {
    const cryptoData = new CryptoData(payload);
    await cryptoData.save();
    console.log("Crypto data saved successfully");
  } catch (error) {
    console.error("Error saving crypto data:", error);
    throw error;
  }
};

export default {
  getCryptoDataWithPagination,
  saveCryptoData,
};
