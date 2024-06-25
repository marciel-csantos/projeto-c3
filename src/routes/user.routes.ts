import express from 'express';
import { createUser, getAllUsers } from '../controllers/UserController';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/register', createUser);

export default router;