import { CryptoData } from "../models/cryptoData";
import { SetupData } from "../models/setupData";
import { fetchCryptoData } from "./coinWatchDataService";
import { saveCryptoData } from "./cryptoService";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const pollCryptoData = async () => {
  try {
    const setup = await SetupData.findOne();
    if (!setup) {
      console.error("Setup data not found");
      return;
    }

    const { trackedCryptoCodes } = setup;
    if (!trackedCryptoCodes || trackedCryptoCodes.length === 0) {
      console.error("No crypto codes to track");
      return;
    }

    for (const code of trackedCryptoCodes) {
      const cryptoData = await fetchCryptoData({
        code,
        currency: setup["currency"],
      });
      cryptoData["code"] = code;
      cryptoData["currency"] = setup["currency"];
      await saveCryptoData({ payload: cryptoData });
      await delay(1000); //to avoid too many requests on the coin watch api
    }
  } catch (error) {
    console.error("Error during polling:", error);
  }
};

export { pollCryptoData };
