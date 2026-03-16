import { Router } from "express";
import healthRouter from "./health.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ ok: true, message: "Servidor disponible" });
});

router.use("/health", healthRouter);

export default router;