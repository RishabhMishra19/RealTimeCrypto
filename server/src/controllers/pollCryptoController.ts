import { Request, Response } from "express";
import { pollCryptoData } from "../services/dataPollingService";

const fetchLiveCryptoData = async (req: Request, res: Response) => {
  try {
    const data = await pollCryptoData();
    res.json(data);
  } catch (error) {
    console.error("Error fetching live crypto data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { fetchLiveCryptoData };
