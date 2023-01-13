"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliationModel = void 0;
const mongoose_1 = require("mongoose");
const AffiliationSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    leader: { type: Object, required: true },
    current_member: { type: [Object], required: true },
    former_member: { type: [Object], required: true },
    associate: { type: [Object], required: true },
    url: { type: String, required: true }
});
exports.AffiliationModel = (0, mongoose_1.model)('Affiliation', AffiliationSchema);
