const mongoose = require('mongoose');

// Your database connection setup here
const db = mongoose.connect('mongodb://localhost:27017/social-network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = db;
