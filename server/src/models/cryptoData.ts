import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: false,
    },
    rank: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    png32: {
      type: String,
      required: true,
    },
    exchanges: {
      type: Number,
      required: true,
    },
    markets: {
      type: Number,
      required: true,
    },
    allTimeHighUSD: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      reqruied: true,
    },
    volume: {
      type: Number,
      reqruied: true,
    },
    cap: {
      type: Number,
      reqruied: true,
    },
    liquidity: {
      type: Number,
      required: true,
    },
    delta: {
      hour: {
        type: Number,
        required: false,
      },
      day: {
        type: Number,
        required: false,
      },
      week: {
        type: Number,
        required: false,
      },
      month: {
        type: Number,
        required: false,
      },
      quarter: {
        type: Number,
        required: false,
      },
      year: {
        type: Number,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

const CryptoData = mongoose.model("CryptoData", cryptoSchema);

export { CryptoData };
