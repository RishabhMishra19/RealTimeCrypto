import express from "express";
import { getSetup, updateSetup } from "../controllers/setupController";

const setupRouter = express.Router();

setupRouter.get("/", getSetup);
setupRouter.post("/", updateSetup);

export { setupRouter };
