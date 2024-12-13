// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// CRUD operations for Student
router.post('/', studentController.createStudent);  // Create a new student
router.get('/', studentController.getAllStudents);  // Get all students
router.get('/:id', studentController.getStudentById);  // Get a student by ID
router.put('/:id', studentController.updateStudent);  // Update a student
router.delete('/:id', studentController.deleteStudent);  // Delete a student

module.exports = router;
