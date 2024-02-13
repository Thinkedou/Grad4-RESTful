import express from 'express';
import usersController from '#src/controllers/usersController'
const router = express.Router();


router.get('/',usersController.allUserController);

router.post('/register', (req, res) => {
  res.send('register');
});

export default router;