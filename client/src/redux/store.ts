import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import { LOCAL_STORAGE_KEY } from "../utils/constants";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
