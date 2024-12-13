// routes/subjectRoutes.js
const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

// CRUD operations for Subject
router.post('/', subjectController.createSubject);  // Create a new subject
router.get('/', subjectController.getAllSubjects);  // Get all subjects
router.get('/:id', subjectController.getSubjectById);  // Get a subject by ID
router.put('/:id', subjectController.updateSubject);  // Update a subject
router.delete('/:id', subjectController.deleteSubject);  // Delete a subject

module.exports = router;
