// controllers/studentController.js
const Student = require('../models/studentSchema');

// Create a new student
const createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('department').populate('subjects');
        res.status(200).json(students);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a student by ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('department').populate('subjects');
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a student
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent };
