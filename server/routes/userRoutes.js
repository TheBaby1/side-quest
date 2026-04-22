import express from 'express';
import { getAllUsers, getUserByUsername } from '../controllers/userController.js';

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.get('/get-by-username', getUserByUsername);

export default router;