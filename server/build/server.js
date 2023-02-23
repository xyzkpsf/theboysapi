"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config/config");
const Character_1 = __importDefault(require("./routes/Character"));
const Episode_1 = __importDefault(require("./routes/Episode"));
const Affiliation_1 = __importDefault(require("./routes/Affiliation"));
const app = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.config.mongo.url)
    .then(() => {
    console.log('Connect to DB successfully');
    startServer();
})
    .catch((err) => console.log(err));
const startServer = () => {
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use(express_1.default.static(path_1.default.join(__dirname, '/../../client/build')));
    /** Rules of our API */
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    });
    app.use('/api/character', Character_1.default);
    app.use('/api/episode', Episode_1.default);
    app.use('/api/affiliation', Affiliation_1.default);
    app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.join(__dirname + '/../../client/build/index.html'));
    });
    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Not found');
        res.status(404).json({
            message: error.message
        });
    });
    app.listen(config_1.config.server.port, () => console.log(`Server is running on port ${config_1.config.server.port}`));
};
