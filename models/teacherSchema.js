const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },  // Reference to Department model
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Exporting the model with a capital 'T' to follow the convention
module.exports = mongoose.model("Teacher", teacherSchema);
