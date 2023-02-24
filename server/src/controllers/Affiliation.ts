import { Request, Response } from 'express';
import { AffiliationModel } from '../models/Affiliation';
import { getRecordsByModelAndFilter, getRecordsByModelAndId } from '../util';

const getAffiliationById = async (req: Request, res: Response) => {
  return getRecordsByModelAndId(req, res, AffiliationModel, req.params.id);
};

const getAffiliationByFilter = async (req: Request, res: Response) => {
  return getRecordsByModelAndFilter(req, res, AffiliationModel, 'affiliation');
};

export default { getAffiliationById, getAffiliationByFilter };
