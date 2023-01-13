"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Episode_1 = __importDefault(require("../controllers/Episode"));
const router = express_1.default.Router();
router.get('/:id', Episode_1.default.getEpisodeById);
router.get('/*', Episode_1.default.getEpisodeByFilter);
module.exports = router;
