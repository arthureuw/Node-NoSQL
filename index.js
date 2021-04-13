const express = require('express')
const cors = require('cors')
const app = express()

const connectDB = require('./config/connectDB')

app.use(express.json())
app.use(cors());

connectDB()

app.use('/skills', require('./routes/SkillController'))
app.use('/missions', require('./routes/MissionController'))
app.use('/users', require('./routes/UserController'))

const port = process.env.PORT || 5000
app.listen(port, err => err ? console.log(err) : console.log(`connected on port ${port}`))
