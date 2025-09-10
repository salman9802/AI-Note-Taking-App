"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const node_fs_1 = __importDefault(require("node:fs"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const env_1 = require("./constants/env");
const routers_1 = __importDefault(require("./routers"));
const error_middleware_1 = require("./middlewares/error.middleware");
const allowedClientOrigins = ["http://localhost:5173"];
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)(env_1.ENV.COOKIE_SECRET));
app.use((0, cors_1.default)({
    // origin: (origin, cb) => {
    //   // allow requests with no origin (like curl or mobile apps)
    //   if (!origin) return cb(null, true);
    //   if (allowedClientOrigins.includes(origin)) return cb(null, true);
    //   return cb(new Error("Blocked by CORS"));
    // },
    origin: allowedClientOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use("/", routers_1.default);
// custom error handler
app.use(error_middleware_1.errorMiddleware);
const HOST = env_1.ENV.NODE_ENV !== "production" ? "localhost" : "0.0.0.0";
// const HOST = "localhost";
app.listen(80, HOST, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Server started");
});
// Serve frontend (React)
if (env_1.ENV.NODE_ENV === "production" && !env_1.ENV.STANDALONE) {
    console.log("Production environment detected");
    const DIST_PATH = path_1.default.join(__dirname, "..", "..", "client", "dist");
    if (node_fs_1.default.existsSync(DIST_PATH)) {
        console.log(`- Using distribution found at '${DIST_PATH}'`);
        app.use(express_1.default.static(DIST_PATH));
        // Catch-all: send back index.html for any route not handled
        app.get("*all", (req, res) => {
            res.sendFile(path_1.default.join(DIST_PATH, "index.html"));
        });
    }
    else {
        console.log(`- No distribution found! '${DIST_PATH}' does not exists.`);
        setImmediate(() => {
            process.exit(1);
        });
    }
}
else {
    console.log(`Development environment detected (NODE_ENV = ${env_1.ENV.NODE_ENV})`);
    console.log("- Manually start client");
}
