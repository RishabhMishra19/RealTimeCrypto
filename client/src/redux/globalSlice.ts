import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEY } from "../utils/constants";

export interface GlobalReducerState {
  cryptoCode: string;
  pageNum: number;
  recordsPerPage: number;
}

const initialState: GlobalReducerState = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_KEY) ??
    JSON.stringify({ cryptoCode: "BTC", pageNum: 1, recordsPerPage: 10 })
);

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCryptoCode(state, action: PayloadAction<string>) {
      return {
        ...state,
        cryptoCode: action.payload,
      };
    },
    setPageNum(state, action: PayloadAction<number>) {
      return {
        ...state,
        pageNum: action.payload,
      };
    },
    setRecordsPerPage(state, action: PayloadAction<number>) {
      return {
        ...state,
        recordsPerPage: action.payload,
      };
    },
  },
});

export const { setCryptoCode, setPageNum, setRecordsPerPage } =
  globalSlice.actions;

export default globalSlice.reducer;
