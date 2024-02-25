const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: new Date},
  
});

module.exports = mongoose.model('Model', modelSchema);