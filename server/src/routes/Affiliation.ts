import express from 'express';
import controller from '../controllers/Affiliation';

const router = express.Router();

router.get('/:id', controller.getAffiliationById);
router.get('/*', controller.getAffiliationByFilter);

export = router;
