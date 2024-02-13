import express from 'express';
import creationsController from '#src/controllers/creationsController'

const router = express.Router();

router.get('/',creationsController.allCreations);
router.get('/:id',creationsController.oneCreation);
router.post('/',creationsController.createCreation);
router.put('/:id',creationsController.updateCreation);

export default router;