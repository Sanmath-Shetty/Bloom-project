import express from 'express';
import { newUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', newUser);
router.post('/login', loginUser);

export default router;
