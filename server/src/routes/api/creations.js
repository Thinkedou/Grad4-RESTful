import express from 'express';
import creationsController from '#src/controllers/creationsController'
import authGard from '#src/middleware/authGard'
import RBAC from '#src/middleware/rbac'
const router = express.Router();

router.get('/',[authGard.protect,RBAC.authorizationChecker],creationsController.allCreations);
router.get('/:id',[authGard.protect,RBAC.authorizationChecker],creationsController.oneCreation);
router.post('/',[authGard.protect,RBAC.authorizationChecker],creationsController.createCreation);
router.put('/:id',creationsController.updateCreation);
router.patch('/:id',creationsController.patchCreation);

export default router;