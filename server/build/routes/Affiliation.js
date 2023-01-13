"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Affiliation_1 = __importDefault(require("../controllers/Affiliation"));
const router = express_1.default.Router();
router.get('/:id', Affiliation_1.default.getAffiliationById);
router.get('/*', Affiliation_1.default.getAffiliationByFilter);
module.exports = router;
