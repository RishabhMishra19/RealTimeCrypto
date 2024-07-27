// redux/cryptoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CryptoData {
  name: string;
  rank: number;
  rate: number;
  volume: number;
  cap: number;
  code: string;
  [key: string]: unknown;
}

export interface CryptoState {
  data: CryptoData[];
  sortBy: string;
  sortOrder: "asc" | "desc";
  currentPage: number;
  itemsPerPage: number;
}

const initialState: CryptoState = {
  data: [],
  sortBy: "name",
  sortOrder: "asc",
  currentPage: 1,
  itemsPerPage: 20,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCryptoData(state, action: PayloadAction<CryptoData[]>) {
      state.data = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setSortOrder(state, action: PayloadAction<"asc" | "desc">) {
      state.sortOrder = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
  },
});

export const {
  setCryptoData,
  setSortBy,
  setSortOrder,
  setCurrentPage,
  setItemsPerPage,
} = cryptoSlice.actions;

export default cryptoSlice.reducer;
