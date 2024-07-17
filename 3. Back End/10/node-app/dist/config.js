"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.REDIS_URL = exports.MYSQL_PORT = exports.MYSQL_HOST = exports.MYSQL_PASSWORD = exports.MYSQL_USER = exports.MYSQL_DATABASE = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: ".env",
});
_a = process.env, exports.MYSQL_DATABASE = _a.MYSQL_DATABASE, exports.MYSQL_USER = _a.MYSQL_USER, exports.MYSQL_PASSWORD = _a.MYSQL_PASSWORD, exports.MYSQL_HOST = _a.MYSQL_HOST, exports.MYSQL_PORT = _a.MYSQL_PORT, exports.REDIS_URL = _a.REDIS_URL;
