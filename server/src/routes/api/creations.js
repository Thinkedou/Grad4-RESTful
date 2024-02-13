import express from 'express';
import creationsController from '#src/controllers/creationsController'

const router = express.Router();

router.get('/',creationsController.allCreations);
router.post('/',creationsController.createCreation);

export default router;