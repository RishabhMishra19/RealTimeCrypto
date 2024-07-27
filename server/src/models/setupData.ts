import mongoose from "mongoose";

interface ISetupData extends Document {
  pollingEnabled: boolean;
  pollingIntervalInSec: number;
  trackedCryptoCodes: string[];
  currency: string;
}

const setupDataSchema = new mongoose.Schema<ISetupData>({
  pollingEnabled: {
    type: Boolean,
    default: false,
  },
  pollingIntervalInSec: {
    type: Number,
    default: 5,
  },
  trackedCryptoCodes: {
    type: [String],
    default: ["BTC", "ETH", "USDT", "BNB", "USDC"],
  },
  currency: {
    type: String,
    enum: ["USD", "INR"],
    default: "INR",
  },
});

const SetupData = mongoose.model<ISetupData>("SetupData", setupDataSchema);

export { SetupData };
