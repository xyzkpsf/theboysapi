import { Schema, model } from 'mongoose';
import { nameAndUrl } from '../util';

export interface IEpisode {
    id: number;
    season: number;
    episode: number;
    title: string;
    premiere_date: string;
    written_by: string[];
    directed_by: string;
    preceded_by: nameAndUrl;
    followed_by: nameAndUrl;
    image: string;
    url: string;
}

const EpisodeSchema = new Schema<IEpisode>(
    {
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
    },
    { collection: 'episodes' }
);

export const EpisodeModel = model<IEpisode>('Episode', EpisodeSchema);
