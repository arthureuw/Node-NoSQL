const mongoose = require('mongoose')
const schema = mongoose.Schema;

const Skills = new schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('skill', Skills)