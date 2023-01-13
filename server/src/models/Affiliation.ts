import { Schema, model } from 'mongoose';
import { nameAndUrl } from '../util';

export interface IAffiliation {
    id: number;
    name: string;
    leader: nameAndUrl;
    current_member: nameAndUrl[];
    former_member: nameAndUrl[];
    associate: nameAndUrl[];
    url: string;
}

const AffiliationSchema = new Schema<IAffiliation>(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        leader: { type: Object, required: true },
        current_member: { type: [Object], required: true },
        former_member: { type: [Object], required: true },
        associate: { type: [Object], required: true },
        url: { type: String, required: true }
    },
    { collection: 'affiliations' }
);

export const AffiliationModel = model<IAffiliation>('Affiliation', AffiliationSchema);
