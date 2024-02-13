import express from 'express';

const router = express.Router();

// v1/api/auth/login
router.post('/login', (req, res) => {
  res.send('auth login');
});

export default router;