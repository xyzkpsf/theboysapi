import { Request, Response } from 'express';
import { CharacterModel } from '../models/Character';
import { getRecordsByModelAndFilter, getRecordsByModelAndId } from '../util';

const getCharacterById = async (req: Request, res: Response) => {
  return getRecordsByModelAndId(req, res, CharacterModel, req.params.id);
};

const getCharacterByFilter = async (req: Request, res: Response) => {
  return getRecordsByModelAndFilter(req, res, CharacterModel, 'character');
};

export default { getCharacterById, getCharacterByFilter };
