const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');

router.post('/', asyncHandler(async (req, res) => {
  const msg = new Message(req.body);
  await msg.save();
  res.status(201).json({ message: 'Message received' });
}));

router.get('/', auth, asyncHandler(async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
}));

router.patch('/:id/status', auth, asyncHandler(async (req, res) => {
  const status = req.body.status === 'read' ? 'read' : 'unread';
  const message = await Message.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!message) return res.status(404).json({ message: 'Message not found' });
  res.json(message);
}));

router.delete('/:id', auth, asyncHandler(async (req, res) => {
  const message = await Message.findByIdAndDelete(req.params.id);
  if (!message) return res.status(404).json({ message: 'Message not found' });
  res.json({ message: 'Deleted' });
}));

module.exports = router;
