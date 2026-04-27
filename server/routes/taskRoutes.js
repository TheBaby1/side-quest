import express from 'express';
import { 
    createTask, 
    displayUserTasks, 
    updateUserTasks,
    deleteUserTask
} from '../controllers/taskController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/new-task', protect, createTask);
router.get('/display-task', protect, displayUserTasks);
router.put('/update-task', protect, updateUserTasks);
router.delete('/delete-task/:id', protect, deleteUserTask);

export default router;