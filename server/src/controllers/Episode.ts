import { Request, Response } from 'express';
import { EpisodeModel } from '../models/Episode';
import { getRecordsByModelAndFilter, getRecordsByModelAndId } from '../util';

const getEpisodeById = async (req: Request, res: Response) => {
  return getRecordsByModelAndId(req, res, EpisodeModel, req.params.id);
};

const getEpisodeByFilter = async (req: Request, res: Response) => {
  return getRecordsByModelAndFilter(req, res, EpisodeModel, 'episode');
};

export default { getEpisodeById, getEpisodeByFilter };
