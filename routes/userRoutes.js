import express from 'express';
import {
  registerUser,
  loginUser,
  uploadAssignment,
  getAdmins,
} from '../controllers/userController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// User registration and login
router.post('/register', registerUser);
router.post('/login', loginUser);

// Assignment upload and fetching available admins with authentication
router.post('/upload', authenticateToken, uploadAssignment); 
router.get('/admins', authenticateToken, getAdmins); 

export default router;
