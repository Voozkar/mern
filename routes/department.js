// routes/departmentRoutes.js
const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

// CRUD operations for Department
router.post('/', departmentController.createDepartment);  // Create a new department
router.get('/', departmentController.getAllDepartments);  // Get all departments
router.get('/:id', departmentController.getDepartmentById);  // Get a department by ID
router.put('/:id', departmentController.updateDepartment);  // Update a department
router.delete('/:id', departmentController.deleteDepartment);  // Delete a department

module.exports = router;
