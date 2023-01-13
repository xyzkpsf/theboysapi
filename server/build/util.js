"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordsByModelAndId = exports.handleIdInput = exports.formatResult = void 0;
const formatResult = (res) => {
    return res.length === 1 ? res[0] : res;
};
exports.formatResult = formatResult;
const isPostiveInter = (s) => {
    const num = Number(s);
    return Number.isInteger(Number(num)) && Number(num) > 0;
};
const handleIdInput = (idInput) => {
    return idInput.includes('[') ? JSON.parse(idInput) : idInput.split(',').filter((i) => isPostiveInter(i));
};
exports.handleIdInput = handleIdInput;
// todo:remove any in model type
const getRecordsByModelAndId = (req, res, model, idInput) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ids = (0, exports.handleIdInput)(idInput);
        if (ids.length === 0) {
            return res.status(400).json({ error: 'Bad Request: invalid request input' });
        }
        const response = yield model.find({ id: { $in: ids } }, '-_id');
        return response && response.length > 0 ? res.status(200).json((0, exports.formatResult)(response)) : res.status(404).json({ message: 'Character not found with given id' });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getRecordsByModelAndId = getRecordsByModelAndId;
