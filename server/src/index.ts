import path from "path";
import fs from "node:fs";

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { ENV } from "./constants/env";
import router from "./routers";
import { errorMiddleware } from "./middlewares/error.middleware";

const allowedClientOrigins = ["http://localhost:5173"];

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(ENV.COOKIE_SECRET));
app.use(
  cors({
    // origin: (origin, cb) => {
    //   // allow requests with no origin (like curl or mobile apps)
    //   if (!origin) return cb(null, true);

    //   if (allowedClientOrigins.includes(origin)) return cb(null, true);

    //   return cb(new Error("Blocked by CORS"));
    // },
    origin: allowedClientOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/", router);

// custom error handler
app.use(errorMiddleware);

const HOST = ENV.NODE_ENV !== "production" ? "localhost" : "0.0.0.0";
// const HOST = "localhost";
app.listen(80, HOST, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Server started");
});

// Serve frontend (React)
if (ENV.NODE_ENV === "production" && !ENV.STANDALONE) {
  console.log("Production environment detected");
  const DIST_PATH = path.join(__dirname, "..", "..", "client", "dist");
  if (fs.existsSync(DIST_PATH)) {
    console.log(`- Using distribution found at '${DIST_PATH}'`);

    app.use(express.static(DIST_PATH));

    // Catch-all: send back index.html for any route not handled
    app.get("*all", (req, res) => {
      res.sendFile(path.join(DIST_PATH, "index.html"));
    });
  } else {
    console.log(`- No distribution found! '${DIST_PATH}' does not exists.`);
    setImmediate(() => {
      process.exit(1);
    });
  }
} else {
  console.log(`Development environment detected (NODE_ENV = ${ENV.NODE_ENV})`);
  console.log("- Manually start client");
}
