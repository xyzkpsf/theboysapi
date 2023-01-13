"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USER = process.env.MONGO_USER || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.u3bsi.mongodb.net/test`;
const SERVER_PORT = process.env.SERVER_PORT || '';
exports.config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
