import { SetupData } from "../models/setupData";

const getSetupData = async () => {
  try {
    return await SetupData.findOne();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching setup data: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

const updateSetupData = async (
  pollingEnabled: boolean,
  pollingIntervalInSec?: number,
  trackedCryptoCodes?: string[],
  currency?: string
) => {
  try {
    return await SetupData.findOneAndUpdate(
      {},
      { pollingEnabled, pollingIntervalInSec, trackedCryptoCodes, currency },
      { new: true, upsert: true }
    );
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error updating setup data: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export default {
  getSetupData,
  updateSetupData,
};
