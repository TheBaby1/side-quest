import express from 'express';
import { 
    getAllUsers, 
    getUserByEmail, 
    getUserByUsername,
    updateUserById,
    deleteUserById
} from '../controllers/userController.js';

const router = express.Router();

router.get('/get-all-users', getAllUsers);
router.post('/get-by-username', getUserByUsername);
router.post('/get-by-email', getUserByEmail);
router.put('/update-by-id/:id', updateUserById);
router.put('/delete-by-id/:id', deleteUserById);

export default router;