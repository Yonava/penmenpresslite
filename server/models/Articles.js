const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        default: ''
    },
    imageCaption: {
        type: String,
        required: false,
        default: ''
    },
    category: {
        type: String,
        required: true,
        default: 'NEWS'
    },
    author: {
        type: String,
        required: true,
        default: 'Yona Voss-Andreae'
    },
    date: {
        type: String,
        required: true,
        default: 'January 1, 2022'
    },
    content: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Articles', ArticleSchema);