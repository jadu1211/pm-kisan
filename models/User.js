const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uniqueid: { type: String, required: true, unique: true },
  entries: [
    {
      name: { type: String, required: true },
      mobileNumber: { type: String, required: true },
      aadhaarNumber: { type: String, required: true },
      dateOfBirth: { type: String, required: true },
      panNumber: { type: String, required: true },
      submittedAt: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
