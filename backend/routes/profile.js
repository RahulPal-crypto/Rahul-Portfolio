const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const auth = require('../middleware/auth');
const asyncHandler = require('../utils/asyncHandler');

router.get('/', asyncHandler(async (req, res) => {
  const p = await Profile.findOne();
  res.json(p);
}));

router.put('/', auth, asyncHandler(async (req, res) => {
  let p = await Profile.findOne();
  if (!p) p = new Profile(req.body);
  else Object.assign(p, req.body);
  await p.save();
  res.json(p);
}));

module.exports = router;
