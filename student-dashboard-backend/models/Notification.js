const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now },
    link: { type: String },
});

module.exports = mongoose.model('Notification', notificationSchema);
