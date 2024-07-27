import express from "express";
import { getCryptoData, getCryptoList } from "../controllers/cryptoController";
import { fetchLiveCryptoData } from "../controllers/pollCryptoController";

const cryptoRouter = express.Router();

cryptoRouter.get("/data", getCryptoData);
cryptoRouter.post("/poll", fetchLiveCryptoData);
cryptoRouter.get("/options", getCryptoList);

export { cryptoRouter };
