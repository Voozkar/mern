const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }, // reference to Department model
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }], // reference to Subject model
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Exporting the model with a capital 'S' to follow the convention
module.exports = mongoose.model("Student", studentSchema);
