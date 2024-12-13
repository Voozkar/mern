const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173', // Only allow this origin to make requests
  }));
  
// Middleware for parsing JSON bodies
app.use(express.json());

// Import routes
const studentRoutes = require('./routes/student');
const subjectRoutes = require('./routes/subject');
const teacherRoutes = require('./routes/teacher');
const departmentRoutes = require('./routes/department');

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/departments', departmentRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://121priyanshu2040:KH0uv43LMpO4SrUa@priyanshu.uxz5k.mongodb.net/?retryWrites=true&w=majority&appName=priyanshu')
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

// Set up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
