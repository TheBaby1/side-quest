import express from 'express';
import { getAllUsers, getUserByEmail, getUserByUsername, getUserByUsername } from '../controllers/userController.js';

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.post('/get-by-username', getUserByUsername);
router.post('/get-by-email', getUserByEmail);

export default router;