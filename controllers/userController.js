import User from '../model/userModel.js';
import jwt from 'jsonwebtoken';
import Assignment from '../model/assignmentModel.js';
import Admin from '../model/adminModel.js';  
import { validateUserRegistration, validateTask, validateLogin } from '../helpers/validationHelper.js';

// Register User
export const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    
    // Validate user registration data
    const validationErrors = validateUserRegistration(userData);
    if (validationErrors) {
      return res.status(400).json({ message: 'Validation errors', errors: validationErrors[0].message });
    }

    const { userName, email, password } = userData;

    // Create and save the new user
    const user = new User({ userName, email, password });
    await user.save();
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User Login
export const loginUser = async (req, res) => {
  try {
    const data = req.body;
    
    // Validate login data
    const validationErrors = validateLogin(data);
    if (validationErrors) {
      return res.status(400).json({ message: 'Validation errors', errors: validationErrors[0].message });
    }

    const { email, password } = data;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'No user found with the provided email address.' });

    // Check if the password matches
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'The provided password is incorrect. Please try again.' });

    // Generate JWT token
    const token = jwt.sign({ id: user._id, userName: user.userName }, process.env.JWT_SECRET);
    
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload Assignment
export const uploadAssignment = async (req, res) => {
  try {
    const { task, adminName } = req.body;

    // Validate task content
    const validationErrors = validateTask(task);
    if (validationErrors) {
      return res.status(400).json({ message: 'Validation errors', errors: validationErrors[0].message });
    }

    const id = req.user.id; // Extract user ID from the token

    // Fetch the user by ID
    const user = await User.findById(id); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { userName } = user;  // Extract the username from the user object

    // Validate if the admin exists
    const admin = await Admin.findOne({ adminName });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid admin name. Admin does not exist.' });
    }

    // Create and save the new assignment
    const assignment = new Assignment({
      userId: userName,
      task,
      adminName
    });

    await assignment.save();

    // Exclude _id and __v from the response
    const { _id, __v, ...rest } = assignment.toObject();  // Convert the Mongoose document to a plain object

    res.status(201).json({ message: 'Assignment uploaded successfully', assignment: rest });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all Admins (for Users)
export const getAdmins = async (req, res) => {
  try {
    // Fetch all admins, excluding _id field and including adminName and email
    const admins = await Admin.find({}, 'adminName email -_id');

    if (admins.length === 0) {
      return res.status(404).json({ message: 'No admins found.' });
    }

    res.status(200).json(admins);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
