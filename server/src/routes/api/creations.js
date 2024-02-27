import express from 'express';
import creationsController from '#src/controllers/creationsController'
import authGard from '#src/middleware/authGard'
const router = express.Router();

router.get('/',authGard.protect,creationsController.allCreations);
router.get('/:id',creationsController.oneCreation);
router.post('/',creationsController.createCreation);
router.put('/:id',creationsController.updateCreation);
router.patch('/:id',creationsController.patchCreation);

export default router;