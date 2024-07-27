import { Request, Response } from "express";
import cryptoService from "../services/cryptoService";
import { fetchCryptoList } from "../services/coinWatchDataService";

const getCryptoData = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const cryptoCode = req.query.cryptoCode as string;
    const sortBy = (req.query.sortBy as string) || "createdAt";
    const sortOrder = ((req.query.sortOrder as string) || "desc") as
      | "asc"
      | "desc";

    if (page < 1 || limit < 1) {
      return res
        .status(400)
        .json({ error: "Page and limit must be positive integers" });
    }

    const result = await cryptoService.getCryptoDataWithPagination({
      page,
      limit,
      cryptoCode,
      sortBy,
      sortOrder,
    });

    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

const getCryptoList = async (req: Request, res: Response) => {
  try {
    const cryptoList = await fetchCryptoList();

    res.status(200).json(cryptoList.map((val) => val.code));
  } catch (error) {
    console.error("Error updating crypto list:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getCryptoData, getCryptoList };
