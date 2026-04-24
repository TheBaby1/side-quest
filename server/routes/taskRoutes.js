import express from 'express';
import { createTask } from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/new-task', protect, createTask);

export default router;