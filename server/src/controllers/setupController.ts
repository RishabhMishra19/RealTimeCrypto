import { Request, Response } from "express";
import setupService from "../services/setupService";

const getSetup = async (req: Request, res: Response) => {
  try {
    const setup = await setupService.getSetupData();

    if (!setup) {
      return res.status(404).json({ message: "Setup data not found" });
    }

    res.json(setup);
  } catch (error) {
    console.error("Error fetching setup data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

interface IUpdateSetupRequest extends Request {
  body: {
    pollingEnabled: boolean;
    pollingIntervalInSec?: number;
    trackedCryptoCodes?: string[];
    currency?: string;
  };
}

const updateSetup = async (req: IUpdateSetupRequest, res: Response) => {
  try {
    const {
      pollingEnabled,
      pollingIntervalInSec,
      trackedCryptoCodes,
      currency,
    } = req.body;

    if (pollingEnabled === undefined) {
      return res.status(400).json({
        message: "Please Provide Required Field (Is Polling Enabled)",
      });
    }
    if (pollingIntervalInSec && pollingIntervalInSec < 5) {
      return res.status(400).json({
        message: "Polling Interval Should be Atleast 5 Seconds",
      });
    }

    const setup = await setupService.updateSetupData(
      pollingEnabled,
      pollingIntervalInSec,
      trackedCryptoCodes,
      currency
    );

    res.json(setup);
  } catch (error) {
    console.error("Error updating setup data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getSetup, updateSetup };
