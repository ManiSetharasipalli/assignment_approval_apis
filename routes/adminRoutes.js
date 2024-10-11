import express from 'express';
import {
  registerAdmin,
  loginAdmin,
  viewAssignments,
  acceptAssignment,
  rejectAssignment,
  acceptSpecificAssignment,
  rejectSpecificAssignment,
} from '../controllers/adminController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Admin registration and login
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// View and manage assignments with authentication
router.get('/assignments', authenticateToken, viewAssignments); 
router.post('/assignments/:id/accept', authenticateToken, acceptAssignment);
router.post('/assignments/:id/reject', authenticateToken, rejectAssignment);
router.post('/assignments/:id/:task/accept', authenticateToken, acceptSpecificAssignment);
router.post('/assignments/:id/:task/reject', authenticateToken, rejectSpecificAssignment);

export default router;
