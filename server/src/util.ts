import { Request, Response } from 'express';

export type nameAndUrl = {
  name: string;
  url: string;
};

export type affiliationObject = {
  name: string;
  url: string;
  is_former: boolean;
};

export type familiesObject = {
  name: string;
  url: string;
  relationship: string;
};

export const characterFilters = ['id', 'name', 'real_name', 'gender', 'status'];

export const episodeFilters = ['id', 'season', 'episode', 'title'];

export const affiliationFilters = ['id', 'name'];

export const formatResult = (res: any[], page?: number) => {
  return res.length === 1 ? res[0] : res;
};

const isPositiveInter = (s: string) => {
  const num = Number(s);
  return Number.isInteger(Number(num)) && Number(num) > 0;
};

export const handleIdInput = (idInput: string) => {
  return idInput.includes('[') ? JSON.parse(idInput) : idInput.split(',').filter((i) => isPositiveInter(i));
};

// todo:remove any in model type
export const getRecordsByModelAndId = async (req: Request, res: Response, model: any, idInput: string) => {
  try {
    const ids = handleIdInput(idInput);
    if (ids.length === 0) {
      return res.status(400).json({ error: 'Bad Request: invalid request input' });
    }
    const response = await model.find({ id: { $in: ids } }, '-_id');
    return response && response.length > 0 ? res.status(200).json(formatResult(response)) : res.status(404).json({ message: 'Character not found with given id' });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// todo: need to handle filter input type and invalid input
export const getRecordsByModelAndFilter = async (req: Request, res: Response, model: any, modelName: string) => {
  const { page = 1 } = req.query;

  const filter = req.query || {};
  for (const key in filter) {
    filter[key] = { $regex: filter[key], $options: 'i' };
  }
  try {
    const response = await model
      .find(filter, '-_id')
      .limit(20)
      .skip((Number(page) - 1) * 20)
      .sort('id');
    const count = await model.countDocuments(filter);
    if (response && response.length > 0) {
      if (count > 20) {
        const pages = Math.ceil(count / 20);
        const prev = Number(page) > 1 ? `https://www.theboysapi.com/api/${modelName}/?page=${Number(page) - 1}` : null;
        const next = Number(page) < pages ? `https://www.theboysapi.com/api/${modelName}/?page=${Number(page) + 1}` : null;
        return res.status(200).json({ count, pages, prev, next, results: formatResult(response) });
      }
      return res.status(200).json(formatResult(response));
    }
    return res.status(404).json({ message: `${modelName} not found with given condition` });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
