const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    head: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },  // Reference to the Teacher model (head of department)
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Export the model with a capital 'D' to follow the convention
const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
