const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const exists = await User.findOne({ email: process.env.ADMIN_EMAIL });
  if (!exists) {
    const hashed = process.env.ADMIN_PASSWORD_HASH
      || await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', await bcrypt.genSalt(10));
    await User.create({ name: 'Admin', email: process.env.ADMIN_EMAIL, password: hashed });
    console.log('Admin user created');
  } else console.log('Admin exists');
  process.exit();
};

seed();
