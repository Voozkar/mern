// controllers/subjectController.js
const Subject = require('../models/subjectSchema');

// Create a new subject
const createSubject = async (req, res) => {
    try {
        const subject = new Subject(req.body);
        await subject.save();
        res.status(201).json(subject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all subjects
const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('teacher');
        res.status(200).json(subjects);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get a subject by ID
const getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id).populate('teacher');
        if (!subject) return res.status(404).json({ message: 'Subject not found' });
        res.status(200).json(subject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a subject
const updateSubject = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subject) return res.status(404).json({ message: 'Subject not found' });
        res.status(200).json(subject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a subject
const deleteSubject = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndDelete(req.params.id);
        if (!subject) return res.status(404).json({ message: 'Subject not found' });
        res.status(200).json({ message: 'Subject deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject };
