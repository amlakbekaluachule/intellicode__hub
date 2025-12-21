import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js"; // fixed
import {
  createProject,
  getProjects,
  getProjectById,
  publishProject,
} from "../controllers/project.controller.js"; // fixed

const router = Router();

router.use(authMiddleware);

router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/:id/publish", publishProject);

export default router;
