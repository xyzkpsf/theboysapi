import { Request, Response } from 'express';
import { CharacterModel } from '../models/Character';
import { formatResult, getRecordsByModelAndId } from '../util';

const getCharacterById = async (req: Request, res: Response) => {
    return getRecordsByModelAndId(req, res, CharacterModel, req.params.id);
};

const getCharacterByFilter = async (req: Request, res: Response) => {
    const filter = req.query || {};
    for (const key in filter) {
        filter[key] = { $regex: filter[key], $options: 'i' };
    }
    try {
        const response = await CharacterModel.find(filter, '-_id');
        return response && response.length > 0 ? res.status(200).json(formatResult(response)) : res.status(404).json({ message: 'Character not found with given condition' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { getCharacterById, getCharacterByFilter };
