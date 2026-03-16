import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ ok: true, message: "Servidor disponible" });
});

app.use("/api", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).json({
    ok: false,
    message: "Error en el servidor",
  });
});

export default app;