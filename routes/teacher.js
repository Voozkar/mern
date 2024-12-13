// routes/teacherRoutes.js
const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// CRUD operations for Teacher
router.post('/', teacherController.createTeacher);  // Create a new teacher
router.get('/', teacherController.getAllTeachers);  // Get all teachers
router.get('/:id', teacherController.getTeacherById);  // Get a teacher by ID
router.put('/:id', teacherController.updateTeacher);  // Update a teacher
router.delete('/:id', teacherController.deleteTeacher);  // Delete a teacher

module.exports = router;
