import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import rateLimit from 'express-rate-limit'
import { config } from './config/config';
import characterRoutes from './routes/Character';
import episodeRoutes from './routes/Episode';
import affiliationRoutes from './routes/Affiliation';

const app = express();

mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.log('Connect to DB successfully');
    startServer();
  })
  .catch((err) => console.log(err));

const startServer = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '/../../client/build')));

  /** Rules of our API */
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET');
      return res.status(200).json({});
    }

    next();
  });

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, 
    standardHeaders: true, 
    legacyHeaders: false, 
  })

  app.use(limiter)

  app.use('/api/character', characterRoutes);
  app.use('/api/episode', episodeRoutes);
  app.use('/api/affiliation', affiliationRoutes);

  app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../../client/build/index.html'));
  });
  /** Error handling */
  app.use((req, res, next) => {
    const error = new Error('Not found');
    res.status(404).json({
      message: error.message
    });
  });

  app.listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}`));
};
