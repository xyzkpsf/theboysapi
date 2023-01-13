"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Character_1 = __importDefault(require("../controllers/Character"));
const router = express_1.default.Router();
router.get('/:id', Character_1.default.getCharacterById);
router.get('/*', Character_1.default.getCharacterByFilter);
module.exports = router;
