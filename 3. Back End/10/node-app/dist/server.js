"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const redis_1 = require("./redis");
const axios_1 = __importDefault(require("axios"));
const logErrorHandler_1 = require("./logErrorHandler");
const PORT = 8080;
const app = (0, express_1.default)();
redis_1.redisClient.connect();
app.get("/user", (req, res) => {
    db_1.default.query(`select * from user`, (error, results) => {
        if (error)
            res.status(500).send(error);
        res.status(200).json({
            data: results,
        });
    });
});
app.get("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const redisData = yield redis_1.redisClient.get("post");
    if (redisData) {
        return res.status(200).json({
            message: "Diambil dr Redis",
            data: JSON.parse(redisData),
        });
    }
    const { data } = yield axios_1.default.get("https://jsonplaceholder.typicode.com/posts");
    yield redis_1.redisClient.setEx("post", 5, JSON.stringify(data));
    return res.status(200).json({
        message: "Bukan dr Redis",
        data,
    });
}));
app.get("/error", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        throw new Error("Error Terjadi");
    }
    catch (err) {
        (0, logErrorHandler_1.logErrorHandler)(err.message);
        res.status(500).send({
            message: err.message,
        });
    }
}));
db_1.default.getConnection((err, connection) => {
    if (err)
        return console.log(err);
    console.log("Database connected successfully");
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
