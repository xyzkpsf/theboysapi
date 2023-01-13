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
Object.defineProperty(exports, "__esModule", { value: true });
const Affiliation_1 = require("../models/Affiliation");
const util_1 = require("../util");
const getAffiliationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, util_1.getRecordsByModelAndId)(req, res, Affiliation_1.AffiliationModel, req.params.id);
});
const getAffiliationByFilter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = req.query || {};
    for (const key in filter) {
        filter[key] = { $regex: filter[key], $options: 'i' };
    }
    try {
        const response = yield Affiliation_1.AffiliationModel.find(filter, '-_id');
        return response && response.length > 0 ? res.status(200).json((0, util_1.formatResult)(response)) : res.status(404).json({ message: 'Affiliation not found with given condition' });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.default = { getAffiliationById, getAffiliationByFilter };
