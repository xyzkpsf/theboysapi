import { Request, Response } from 'express';
import { EpisodeModel } from '../models/Episode';
import { formatResult, getRecordsByModelAndId } from '../util';

const getEpisodeById = async (req: Request, res: Response) => {
    return getRecordsByModelAndId(req, res, EpisodeModel, req.params.id);
};

const getEpisodeByFilter = async (req: Request, res: Response) => {
    const filter = req.query || {};
    for (const key in filter) {
        filter[key] = { $regex: filter[key], $options: 'i' };
    }
    try {
        const response = await EpisodeModel.find(filter, '-_id');
        return response && response.length > 0 ? res.status(200).json(formatResult(response)) : res.status(404).json({ message: 'Episode not found with given condition' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { getEpisodeById, getEpisodeByFilter };
