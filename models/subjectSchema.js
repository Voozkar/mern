const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }, // reference to the Teacher model
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Exporting the model with a capital 'S' to follow the convention
module.exports = mongoose.model("Subject", subjectSchema);
