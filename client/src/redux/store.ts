import { configureStore } from "@reduxjs/toolkit";
import setupReducer from "./setupSlice";
import cryptoReducer from "./cryptoSlice";

const store = configureStore({
  reducer: {
    setup: setupReducer,
    crypto: cryptoReducer,
  },
  preloadedState: {
    setup: JSON.parse(localStorage.getItem("setup") || "{}"),
    crypto: JSON.parse(localStorage.getItem("crypto") || "[]"),
  },
});

// Save to localStorage whenever state changes
store.subscribe(() => {
  localStorage.setItem("setup", JSON.stringify(store.getState().setup));
  localStorage.setItem("crypto", JSON.stringify(store.getState().crypto));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;