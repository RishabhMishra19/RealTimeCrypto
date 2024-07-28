import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./globalSlice";
import { LOCAL_STORAGE_KEY } from "../utils/constants";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(store.getState().global)
  );
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
