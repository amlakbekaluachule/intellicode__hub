import { Router } from "express";
import { completeCode, explainCode } from "../controllers/ai.controller.js"; // fixed

const router = Router();

router.post("/complete", completeCode);
router.post("/explain", explainCode);

export default router;
