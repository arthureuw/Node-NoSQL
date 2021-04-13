const mongoose = require('mongoose')
const schema   = mongoose.Schema;

const MissionSchema= new schema({

});

module.exports  = mongoose.model('mission',MissionSchema)
