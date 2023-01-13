import express from 'express';
import controller from '../controllers/Character';

const router = express.Router();

router.get('/:id', controller.getCharacterById);
router.get('/*', controller.getCharacterByFilter);

export = router;
