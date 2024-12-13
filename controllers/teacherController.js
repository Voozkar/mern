// controllers/teacherController.js
const Teacher = require('../models/teacherSchema');

// Create a new teacher
const createTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(201).json(teacher);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all teachers
const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find().populate('department');
        res.status(200).json(teachers);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a teacher by ID
const getTeacherById = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id).populate('department');
        if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
        res.status(200).json(teacher);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a teacher
const updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
        res.status(200).json(teacher);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a teacher
const deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
        res.status(200).json({ message: 'Teacher deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { createTeacher, getAllTeachers, getTeacherById, updateTeacher, deleteTeacher };
