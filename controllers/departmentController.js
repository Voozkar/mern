// controllers/departmentController.js
const Department = require('../models/departmentSchema');

// Create a new department
const createDepartment = async (req, res) => {
    try {
        const department = new Department(req.body);
        await department.save();
        res.status(201).json(department);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all departments
const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find().populate('head');
        res.status(200).json(departments);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a department by ID
const getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id).populate('head');
        if (!department) return res.status(404).json({ message: 'Department not found' });
        res.status(200).json(department);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a department
const updateDepartment = async (req, res) => {
    try {
        const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!department) return res.status(404).json({ message: 'Department not found' });
        res.status(200).json(department);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a department
const deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id);
        if (!department) return res.status(404).json({ message: 'Department not found' });
        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { createDepartment, getAllDepartments, getDepartmentById, updateDepartment, deleteDepartment };
