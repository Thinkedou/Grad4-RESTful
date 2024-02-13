import express from 'express';
import authController from '#src/controllers/authController'

const router = express.Router();

// v1/api/auth/login
router.post('/login',authController.login);

export default router;