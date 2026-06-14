const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Project = require('../models/Project');
const auth = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');

const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, path.join(__dirname, '..', 'uploads')); },
  filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname); }
});
const upload = multer({ storage });

// GET /api/projects
router.get('/', asyncHandler(async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
}));

// GET /api/projects/:id
router.get('/:id', asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
}));

// POST /api/projects
router.post('/', auth, upload.single('image'), asyncHandler(async (req, res) => {
  const data = req.body;
  if (req.file) data.image = `/uploads/${req.file.filename}`;
  const project = new Project(data);
  await project.save();
  res.status(201).json(project);
}));

// PUT /api/projects/:id
router.put('/:id', auth, upload.single('image'), asyncHandler(async (req, res) => {
  const data = req.body;
  if (req.file) data.image = `/uploads/${req.file.filename}`;
  const project = await Project.findByIdAndUpdate(req.params.id, data, { new: true });
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
}));

// DELETE /api/projects/:id
router.delete('/:id', auth, asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json({ message: 'Deleted' });
}));

module.exports = router;
