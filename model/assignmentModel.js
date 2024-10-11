import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Reference to the user who created the assignment
  task: { type: String, required: true, unique: true },
  adminName: { type: String, required: true }, // Name of the assigned admin
  status: { 
    type: String, 
    enum: ['pending', 'accepted', 'rejected'], // Allowed status values
    default: 'pending' // Default status
  },
}, { timestamps: true });

const Assignment = mongoose.model('Assignment', assignmentSchema);
export default Assignment;
