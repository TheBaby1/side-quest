import express from 'express';
import { getAllUsers, getUserByUsername } from '../controllers/userController.js';

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.post('/get-by-username', getUserByUsername);

export default router;