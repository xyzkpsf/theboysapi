import express from 'express';
import controller from '../controllers/Episode';

const router = express.Router();

router.get('/:id', controller.getEpisodeById);
router.get('/*', controller.getEpisodeByFilter);

export = router;
