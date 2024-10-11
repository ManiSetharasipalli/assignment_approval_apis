import Joi from 'joi';

// Reusable username schema
const usernameSchema = Joi.string()
  .min(4)
  .max(15)
  .required()
  .pattern(/^(?=.*[a-zA-Z])(?=.*[0-9]*[a-zA-Z]|[a-zA-Z]*[0-9])/) // At least one letter and cannot be only numbers
  .messages({
    'string.base': 'Name must be a string.',
    'string.min': 'Name must be at least 4 characters long.',
    'string.max': 'Name must be at most 15 characters long.',
    'string.pattern.base': 'Name must contain at least one letter and cannot consist solely of numbers or special characters.',
    'any.required': 'Name is required.',
  });

// Reusable email schema
const emailSchema = Joi.string()
  .email()
  .required()
  .messages({
    'string.base': 'Email must be a string.',
    'string.email': 'Email must be a valid email address.',
    'any.required': 'Email is required.',
  });

// Reusable password schema
const passwordSchema = Joi.string()
  .min(6)
  .pattern(/(?=.*[0-9])/) // At least one number
  .pattern(/(?=.*[!@#$%^&*(),.?":;{}|<>])/) // At least one special character
  .pattern(/(?=.*[a-z])/) // At least one lowercase letter
  .pattern(/(?=.*[A-Z])/) // At least one uppercase letter
  .required()
  .messages({
    'string.base': 'Password must be a string.',
    'string.min': 'Password must be at least 6 characters long.',
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    'any.required': 'Password is required.',
  });

// Simple password schema for login
const simplePasswordSchema = Joi.string()
  .required()
  .messages({
    'string.base': 'Password must be a string.',
    'any.required': 'Password is required.',
  });

// User registration schema
const userRegistrationSchema = Joi.object({
  userName: usernameSchema, 
  email: emailSchema,       
  password: passwordSchema, 
});

// Admin registration schema
const adminRegistrationSchema = Joi.object({
  adminName: usernameSchema, 
  email: emailSchema,       
  password: passwordSchema,  
});

// User Login schema
const loginSchema = Joi.object({
  email: emailSchema,       
  password: simplePasswordSchema 
});

// Task schema
const taskSchema = Joi.string()
  .min(4)
  .required()
  .pattern(/^(?=.*[a-zA-Z])(?=.*\d)?[a-zA-Z\d]+$/) // Must contain at least one letter, optional number
  .messages({
    'string.base': 'Task must be a string.',
    'string.min': 'Task must be at least 4 characters long.',
    'string.pattern.base': 'Task must contain at least one letter and can optionally contain numbers.',
    'any.required': 'Task is required.',
  });

// Validation functions
const validateUserRegistration = (userData) => {
  const { error } = userRegistrationSchema.validate(userData);
  return error ? error.details : null; 
};

const validateAdminRegistration = (adminData) => {
  const { error } = adminRegistrationSchema.validate(adminData);
  return error ? error.details : null; 
};

const validateLogin = (data) => {
  const { error } = loginSchema.validate(data);
  return error ? error.details : null; 
};

const validateTask = (taskData) => {
  const { error } = taskSchema.validate(taskData);
  return error ? error.details : null;
};

export { validateUserRegistration, validateAdminRegistration, validateTask, validateLogin };
