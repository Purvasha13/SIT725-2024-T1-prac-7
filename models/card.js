const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: String,
    color: String,
    image: String,
    description: String
});

module.exports = mongoose.model('Card', cardSchema);
