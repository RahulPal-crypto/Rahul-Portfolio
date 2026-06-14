const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  proficiency: Number,
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);
