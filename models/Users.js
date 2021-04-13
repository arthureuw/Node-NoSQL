const mongoose = require('mongoose')
const schema = mongoose.Schema;

const Users = new schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    mail: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String,
    },
    age: {
        type: Number,
        min: 18
    },
    bookmarks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mission'
    }],
    oldest: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'mission'
    }],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('user', Users)