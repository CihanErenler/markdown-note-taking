import express from "express";
import { greet } from "../controllers/mainController.mjs";

const router = express.Router();

router.get("/", greet);

export default router;
