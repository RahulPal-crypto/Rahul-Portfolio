const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');
const auth = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');

router.get('/', asyncHandler(async (req, res) => { const items = await Achievement.find(); res.json(items); }));
router.post('/', auth, asyncHandler(async (req, res) => { const a = new Achievement(req.body); await a.save(); res.status(201).json(a); }));
router.put('/:id', auth, asyncHandler(async (req, res) => {
  const a = await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!a) return res.status(404).json({ message: 'Achievement not found' });
  res.json(a);
}));
router.delete('/:id', auth, asyncHandler(async (req, res) => {
  const a = await Achievement.findByIdAndDelete(req.params.id);
  if (!a) return res.status(404).json({ message: 'Achievement not found' });
  res.json({ message: 'Deleted' });
}));

module.exports = router;
