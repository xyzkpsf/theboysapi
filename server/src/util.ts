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

export const formatResult = (res: any[]) => {
    return res.length === 1 ? res[0] : res;
};

const isPostiveInter = (s: string) => {
    const num = Number(s);
    return Number.isInteger(Number(num)) && Number(num) > 0;
};

export const handleIdInput = (idInput: string) => {
    return idInput.includes('[') ? JSON.parse(idInput) : idInput.split(',').filter((i) => isPostiveInter(i));
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
