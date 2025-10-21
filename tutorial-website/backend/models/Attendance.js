const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['present','absent','leave'], default: 'present' }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);
