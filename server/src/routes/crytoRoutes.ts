import express from "express";
import { getCryptoData } from "../controllers/cryptoController";
import { fetchLiveCryptoData } from "../controllers/pollCryptoController";

const cryptoRouter = express.Router();

cryptoRouter.get("/data", getCryptoData);
cryptoRouter.post("/poll", fetchLiveCryptoData);

export { cryptoRouter };
