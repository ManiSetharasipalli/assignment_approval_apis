import Admin from '../model/adminModel.js';
import Assignment from '../model/assignmentModel.js';
import jwt from 'jsonwebtoken';
import { validateAdminRegistration, validateLogin } from '../helpers/validationHelper.js';

// Register Admin
export const registerAdmin = async (req, res) => {
  try {
    const userData = req.body;

    // Validate registration data
    const validationErrors = validateAdminRegistration(userData);
    if (validationErrors) {
      return res.status(400).json({ message: 'Validation errors', errors: validationErrors[0].message });
    }
  
    const { adminName, email, password } = userData;

    // Create a new admin instance
    const admin = new Admin({ adminName, email, password });
    await admin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin Login
export const loginAdmin = async (req, res) => {
  try {
    const data = req.body;

    // Validate login data
    const validationErrors = validateLogin(data);
    if (validationErrors) {
      return res.status(400).json({ message: 'Validation errors', errors: validationErrors[0].message });
    }

    const { email, password } = data;

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'No admin found with the provided email address.' });

    // Compare password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'The provided password is incorrect. Please try again.' });

    // Generate JWT token
    const token = jwt.sign({ id: admin._id, adminName: admin.adminName }, process.env.JWT_SECRET);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// View Assignments tagged to Admin (by admin name)
export const viewAssignments = async (req, res) => {
  try {
    const adminName = req.user.adminName; // Get admin name from token

    // Find assignments associated with the admin
    const assignments = await Assignment.find({ adminName }, '-_id -__v');
    if (assignments.length === 0) {
      return res.status(404).json({ message: 'No assignments found.' });
    }

    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Accept Assignment (by user ID)
export const acceptAssignment = async (req, res) => {
  try {
    const { id } = req.params;  // Get user ID from params
    const adminName = req.user.adminName; // Get admin name from token

    // Update the assignment status to "accepted"
    const updatedAssignment = await Assignment.findOneAndUpdate(
      { userId: id, adminName: adminName },
      { status: 'accepted' },
      { new: true } // Return the updated document
    );

    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found for this user' });
    }

    // Exclude _id and __v before sending the response
    const { _id, __v, ...assignmentWithoutIdAndVersion } = updatedAssignment._doc;

    res.status(200).json({ message: 'Assignment accepted', assignment: assignmentWithoutIdAndVersion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reject Assignment (by user ID)
export const rejectAssignment = async (req, res) => {
  try {
    const { id } = req.params;  // Get user ID from params
    const adminName = req.user.adminName; // Get admin name from token

    // Update the assignment status to "rejected"
    const updatedAssignment = await Assignment.findOneAndUpdate(
      { userId: id, adminName: adminName },
      { status: 'rejected' },
      { new: true } // Return the updated document
    );

    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found for this user' });
    }

    // Exclude _id and __v before sending the response
    const { _id, __v, ...assignmentWithoutIdAndVersion } = updatedAssignment._doc;

    res.status(200).json({ message: 'Assignment Rejected', assignment: assignmentWithoutIdAndVersion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Accept Specific Assignment (by user ID and task)
export const acceptSpecificAssignment = async (req, res) => {
  try {
    const { id, task } = req.params;  // Get user ID and task from params
    const adminName = req.user.adminName; // Get admin name from token

    // Update the specific assignment's status to "accepted"
    const updatedAssignment = await Assignment.findOneAndUpdate(
      { userId: id, task: task, adminName: adminName },
      { status: 'accepted' },
      { new: true } // Return the updated document
    );

    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found for this user' });
    }

    // Exclude _id and __v before sending the response
    const { _id, __v, ...assignmentWithoutIdAndVersion } = updatedAssignment._doc;

    res.status(200).json({ message: 'Assignment accepted', assignment: assignmentWithoutIdAndVersion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reject Specific Assignment (by user ID and task)
export const rejectSpecificAssignment = async (req, res) => {
  try {
    const { id, task } = req.params;  // Get user ID and task from params
    const adminName = req.user.adminName; // Get admin name from token

    // Update the specific assignment's status to "rejected"
    const updatedAssignment = await Assignment.findOneAndUpdate(
      { userId: id, task: task, adminName: adminName },
      { status: 'rejected' },
      { new: true }, // Return the updated document
      '-_id -__v' // Exclude _id and __v fields from the result
    );

    if (!updatedAssignment) {
      return res.status(404).json({ message: 'Assignment not found for this user' });
    }

    // Exclude _id and __v before sending the response
    const { _id, __v, ...assignmentWithoutIdAndVersion } = updatedAssignment._doc;

    res.status(200).json({ message: 'Assignment Rejected', assignment: assignmentWithoutIdAndVersion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
