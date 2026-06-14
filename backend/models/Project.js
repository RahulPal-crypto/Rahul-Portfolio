const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  screenshots: [String],
  techStack: [String],
  githubLink: String,
  liveLink: String,
  features: [String],
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
