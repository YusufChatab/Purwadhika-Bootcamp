"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = require("./config");
exports.default = mysql2_1.default.createPool({
    host: config_1.MYSQL_HOST,
    user: config_1.MYSQL_USER,
    password: config_1.MYSQL_PASSWORD,
    database: config_1.MYSQL_DATABASE,
    port: Number(config_1.MYSQL_PORT),
});
