const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subject: String
}, { timestamps: true });

module.exports = mongoose.model('Teacher', TeacherSchema);
