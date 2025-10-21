const express = require('express');
const path = require('path');
const connectDB = require('./config/database');

const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const teacherRoutes = require('./routes/teachers');
const attendanceRoutes = require('./routes/attendance');
const uploadRoutes = require('./routes/upload');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// connect DB if MONGO_URI provided
if (process.env.MONGO_URI) connectDB(process.env.MONGO_URI);

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
