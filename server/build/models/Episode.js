"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeModel = void 0;
const mongoose_1 = require("mongoose");
const EpisodeSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    season: { type: Number, required: true },
    episode: { type: Number, required: true },
    title: { type: String, required: true },
    premiere_date: { type: String, required: true },
    written_by: { type: [String], required: true },
    directed_by: { type: String, required: true },
    preceded_by: { type: Object, required: true },
    followed_by: { type: Object, required: true },
    image: { type: String, required: true },
    url: { type: String, required: true }
});
exports.EpisodeModel = (0, mongoose_1.model)('Episode', EpisodeSchema);
