import { Request, Response } from 'express';
import { AffiliationModel } from '../models/Affiliation';
import { formatResult, getRecordsByModelAndId } from '../util';

const getAffiliationById = async (req: Request, res: Response) => {
    return getRecordsByModelAndId(req, res, AffiliationModel, req.params.id);
};

const getAffiliationByFilter = async (req: Request, res: Response) => {
    const filter = req.query || {};
    for (const key in filter) {
        filter[key] = { $regex: filter[key], $options: 'i' };
    }
    try {
        const response = await AffiliationModel.find(filter, '-_id');
        return response && response.length > 0 ? res.status(200).json(formatResult(response)) : res.status(404).json({ message: 'Affiliation not found with given condition' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { getAffiliationById, getAffiliationByFilter };
