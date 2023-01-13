import { Schema, model } from 'mongoose';
import { nameAndUrl, affiliationObject, familiesObject } from '../util';

export interface ICharacter {
    id: number;
    name: string;
    real_name: string;
    species: string[];
    citizenship: string;
    gender: string;
    status: string;
    affiliation: affiliationObject[];
    families: familiesObject[];
    portrayed: string[];
    first_seen: nameAndUrl;
    last_seen: nameAndUrl;
    season: number[];
    image: string;
    url: string;
}

const CharacterSchema = new Schema<ICharacter>(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        real_name: { type: String, required: true },
        species: { type: [String], required: true },
        citizenship: { type: String, required: true },
        gender: { type: String, required: true },
        status: { type: String, required: true },
        affiliation: { type: [Object], required: true },
        families: { type: [Object], required: true },
        portrayed: { type: [String], required: true },
        first_seen: { type: Object, required: true },
        last_seen: { type: Object, required: true },
        season: { type: [String], required: true },
        image: { type: String, required: true },
        url: { type: String, required: true }
    },
    { collection: 'characters' }
);

export const CharacterModel = model<ICharacter>('Character', CharacterSchema);
