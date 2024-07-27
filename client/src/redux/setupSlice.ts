import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface SetupState {
  pollingEnabled: boolean;
  pollingInterval: number;
  trackedCryptoCodes: string[];
  currency: string;
}

const initialState: SetupState = {
  pollingEnabled: false,
  pollingInterval: 10,
  trackedCryptoCodes: [],
  currency: "USD",
};

type AsyncThunkConfig = Record<string, never>;

export const fetchSetupData = createAsyncThunk<
  SetupState,
  void,
  AsyncThunkConfig
>("setup/fetchSetupData", async () => {
  const response = await axios.get<SetupState>("/api/setup");
  return response.data;
});

export const updateSetupData = createAsyncThunk<
  SetupState,
  SetupState,
  AsyncThunkConfig
>("setup/updateSetupData", async (setupData) => {
  const response = await axios.post<SetupState>("/api/setup", setupData);
  return response.data;
});

const setupSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {
    setPollingEnabled(state, action: PayloadAction<boolean>) {
      state.pollingEnabled = action.payload;
    },
    setPollingInterval(state, action: PayloadAction<number>) {
      state.pollingInterval = action.payload;
    },
    setTrackedCryptoCodes(state, action: PayloadAction<string[]>) {
      state.trackedCryptoCodes = action.payload;
    },
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSetupData.fulfilled,
        (state, action: PayloadAction<SetupState>) => {
          return action.payload;
        }
      )
      .addCase(
        updateSetupData.fulfilled,
        (state, action: PayloadAction<SetupState>) => {
          return action.payload;
        }
      )
      .addCase(fetchSetupData.rejected, (state, action) => {
        console.error("Failed to fetch setup data:", action.error.message);
      })
      .addCase(updateSetupData.rejected, (state, action) => {
        console.error("Failed to update setup data:", action.error.message);
      });
  },
});

export const {
  setPollingEnabled,
  setPollingInterval,
  setTrackedCryptoCodes,
  setCurrency,
} = setupSlice.actions;

export default setupSlice.reducer;
