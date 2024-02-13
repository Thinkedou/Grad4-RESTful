import express from 'express';
import ping from './ping.js';
import auth from './auth.js';
import users from './users.js';

const router = express.Router();

// api/v1/
router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});
// api/v1/users/
router.get('/users', async (req, res) => {
  const allU = await usersService.findAllUsers()
  res.json(allU);
});


// api/v1/ping 
router.use('/ping', ping);
router.use('/auth', auth);
router.use('/users', users);


export default router;
