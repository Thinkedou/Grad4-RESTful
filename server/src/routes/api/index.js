import express from 'express';
import ping from './ping.js';
import usersService from '#src/services/usersService'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API/V1',
  });
});

router.get('/users', async (req, res) => {
  const allU = await usersService.findAllUsers()
  res.json(allU);
});



router.use('/ping', ping);

export default router;
