import axios from "axios";
import {
  FetchCryptoDataRequest,
  FetchCryptoDataResponse,
} from "./crypto-data.types";

export const fetchCryptoData = ({
  cryptoCode,
  limit,
  page,
  sortBy,
  sortOrder,
}: FetchCryptoDataRequest) => {
  return axios.get<FetchCryptoDataResponse>("/api/crypto/data", {
    params: {
      cryptoCode,
      limit,
      page,
      sortBy,
      sortOrder,
    },
  });
};
