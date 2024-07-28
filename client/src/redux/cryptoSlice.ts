import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Crypto {
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

export interface CryptoState {
  data: Crypto[];
  limit: number;
  page: number;
  total: number;
  totalPages: number;
}

const initialState: CryptoState = {
  data: [],
  limit: 10,
  page: 1,
  total: 0,
  totalPages: 0,
};

type AsyncThunkConfig = Record<string, never>;

export const fetchCryptoList = createAsyncThunk<
  CryptoState,
  void,
  AsyncThunkConfig
>("crypto/fetchCryptoList", async () => {
  const response = await axios.get("/api/crypto/data");
  return response.data;
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCryptoData: (data: any) => {
      return { ...initialState, data: data };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCryptoList.fulfilled,
        (state, action: PayloadAction<CryptoState>) => {
          return action.payload;
        }
      )
      .addCase(fetchCryptoList.rejected, (state, action) => {
        console.error("Failed to fetch crypto data:", action.error.message);
      });
  },
});

export default cryptoSlice.reducer;
