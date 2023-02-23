"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = 3000;
exports.config = {
    mongo: {
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/Boys'
    },
    server: {
        port: parseInt(process.env.PORT, 10) || SERVER_PORT
    }
};
