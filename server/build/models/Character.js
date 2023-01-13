"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterModel = void 0;
const mongoose_1 = require("mongoose");
const CharacterSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    real_name: { type: String, required: true },
    species: { type: [String], required: true },
    citizenship: { type: String, required: true },
    gender: { type: String, required: true },
    status: { type: String, required: true },
    affiliation: { type: [Object], required: true },
    family: { type: [Object], required: true },
    portrayed: { type: String, required: true },
    first_seen: { type: Object, required: true },
    last_seen: { type: Object, required: true },
    season: { type: [String], required: true },
    image: { type: String, required: true },
    url: { type: String, required: true }
});
exports.CharacterModel = (0, mongoose_1.model)('Character', CharacterSchema);
