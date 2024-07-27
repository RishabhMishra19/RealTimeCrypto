import express from "express";
import connectDB from "./config/db";
import cors from "cors";
import morgan from "morgan";
import { SetupData } from "./models/setupData";
import { cryptoRouter } from "./routes/crytoRoutes";
import { pollCryptoData } from "./services/dataPollingService";
import { setupRouter } from "./routes/setupRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(morgan("dev"));

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("API is running...");
});

app.use("/api/setup", setupRouter);
app.use("/api/crypto", cryptoRouter);

// Polling interval handler
let pollingInterval: NodeJS.Timeout | null = null;

const setupChangeStream = () => {
  try {
    const changeStream = SetupData.watch();

    changeStream.on("change", async (change) => {
      console.log("Setup Change detected:", change.operationType);

      if (pollingInterval) {
        clearInterval(pollingInterval);
      }

      const setup = await SetupData.findOne();
      if (setup && setup.pollingEnabled) {
        pollingInterval = setInterval(
          pollCryptoData,
          setup.pollingIntervalInSec * 1000
        );
        console.log(
          "Polling set up with interval:",
          setup.pollingIntervalInSec
        );
      }
    });

    console.log("Setup Change stream setup complete.");
  } catch (error) {
    console.error("Failed to set up change stream for Setup:", error);
  }
};

const initializePolling = async () => {
  try {
    const setup = await SetupData.findOne();
    if (setup && setup.pollingEnabled) {
      pollingInterval = setInterval(
        pollCryptoData,
        setup.pollingIntervalInSec * 1000
      );
      console.log(
        "Initial polling set up with interval:",
        setup.pollingIntervalInSec
      );
    }
  } catch (error) {
    console.error("Failed to initialize polling:", error);
  }
};

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
  await initializePolling();
  setupChangeStream();
});
