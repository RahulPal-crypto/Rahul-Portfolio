const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  bio: String,
  profileImage: String,
  resume: String,
  socialLinks: {
    github: String,
    linkedin: String,
    leetcode: String,
    gfg: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
