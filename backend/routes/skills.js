const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const auth = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');

router.get('/', asyncHandler(async (req, res) => { const skills = await Skill.find(); res.json(skills); }));
router.post('/', auth, asyncHandler(async (req, res) => { const s = new Skill(req.body); await s.save(); res.status(201).json(s); }));
router.put('/:id', auth, asyncHandler(async (req, res) => {
  const s = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!s) return res.status(404).json({ message: 'Skill not found' });
  res.json(s);
}));
router.delete('/:id', auth, asyncHandler(async (req, res) => {
  const s = await Skill.findByIdAndDelete(req.params.id);
  if (!s) return res.status(404).json({ message: 'Skill not found' });
  res.json({ message: 'Deleted' });
}));

module.exports = router;
