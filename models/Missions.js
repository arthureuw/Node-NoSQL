const mongoose = require('mongoose')
const schema = mongoose.Schema;

const MissionSchema = new schema({
    name: {type: String, required: true, trim: true},
    location: {type: String},
    duration: {type: Number, min: 0},
    salary: {type: Number, min: 0},
    ownerId : [
        {type: mongoose.Schema.Types.ObjectId,ref:'owner'}
    ],
    createdAt: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('mission', MissionSchema)


// skills []
// ownerId

