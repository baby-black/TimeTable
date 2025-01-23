const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    class: { type: String },
    phone: { type: String },
    major: { type: String },
});

module.exports = mongoose.model('User', userSchema);
