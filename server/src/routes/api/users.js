import express from 'express';

const router = express.Router();


router.get('/users', (req, res) => {
  res.send('u');
});

router.post('/register', (req, res) => {
  res.send('register');
});

export default router;