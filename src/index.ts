// src/index.ts
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

const PORT = Number(process.env.PORT || 4000);
const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI) {
  console.error(
    "BRAK MONGO_URI w .env — wypełnij MONGO_URI i spróbuj ponownie."
  );
  process.exit(1);
}

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
  })
);

app.get("/api/health", (_req, res) => {
  const state = mongoose.connection.readyState; // 0 disconnected, 1 connected, 2 connecting, 3 disconnecting
  res.json({ ok: true, mongoState: state });
});
// ROUTERS

async function start() {
  try {
    console.log("Łączenie z MongoDB...");
    await mongoose.connect(MONGO_URI, {});
    console.log("MongoDB connected ✅");

    const server = app.listen(PORT, () => {
      console.log(`Server running: http://localhost:${PORT} ✅`);
      console.log(`Health: http://localhost:${PORT}/api/health`);
    });

    const shutdown = async (signal?: string) => {
      console.log(`\nReceived ${signal ?? "shutdown"} — closing server...`);
      server.close(async () => {
        console.log("HTTP server closed.");
        try {
          await mongoose.disconnect();
          console.log("MongoDB disconnected.");
          process.exit(0);
        } catch (err) {
          console.error("Error during disconnect:", err);
          process.exit(1);
        }
      });

      setTimeout(() => {
        console.error("Forcing exit.");
        process.exit(1);
      }, 10_000).unref();
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (err) {
    console.error("Startup error:", err);
    process.exit(1);
  }
}

start();
