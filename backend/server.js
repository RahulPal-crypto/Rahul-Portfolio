const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

dotenv.config();

const app = express();
app.use(express.json());

const allowedOrigins = new Set([
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
].filter(Boolean));

app.use(cors({
  origin(origin, callback) {
    if (!origin || process.env.CLIENT_URL === '*' || allowedOrigins.has(origin)) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  },
}));

const uploadsDir = path.join(__dirname, 'uploads');
fs.mkdirSync(uploadsDir, { recursive: true });

// Connect DB
const connectDB = async () => {
  if (!process.env.MONGO_URI) return false;
  try {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
    console.log('MongoDB connected');
    return true;
  } catch (err) {
    console.error('MongoDB connection failed:', err.message || err);
    return false;
  }
};

const setupRoutes = (useMocks = false) => {
  if (useMocks) {
    console.warn('Using mock API routes (no MongoDB)');
    app.use('/api', require('./routes/mockRoutes'));
  } else {
    // Routes (real DB-backed)
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/projects', require('./routes/projects'));
    app.use('/api/skills', require('./routes/skills'));
    app.use('/api/achievements', require('./routes/achievements'));
    app.use('/api/contact', require('./routes/contact'));
    app.use('/api/profile', require('./routes/profile'));
  }
};

// Static uploads
app.use('/uploads', express.static(uploadsDir));

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    database: mongoose.connection.readyState === 1 ? 'connected' : 'mock',
  });
});

const start = async () => {
  const dbOk = await connectDB();
  setupRoutes(!dbOk);

  // Error handlers must be registered after routes so asynchronous route errors
  // are forwarded here instead of falling through to Express's default handler.
  app.use((err, req, res, next) => {
    console.error(err);
    const status = err.name === 'CastError' ? 400 : 500;
    res.status(status).json({
      message: status === 400 ? 'Invalid request id' : 'Server error',
    });
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

start();
