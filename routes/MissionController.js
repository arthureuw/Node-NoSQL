const express = require('express')
const router = express.Router()

const Mission = require('../models/Missions')

router.get("/", (req, res) => {
    Mission.find({})
        .then(missions => res.send(missions))
        .catch(err => console.log(err))
})

router.post("/", (req, res) => {
    const {name, location, duration, salary, desc, skills, ownerId} = req.body
    const newMission = new Mission({
        name, location, duration, salary, desc, skills, ownerId
    })
    newMission.save() // du mongoose
        .then(missions => res.send(missions))
        .catch(err => console.log(err))
})

router.get("/:_id", (req, res) => {
    const {_id} = req.params
    Mission.findOne({_id: _id})
        .then(skill => res.send(skill))
        .catch(err => console.log(err))
})

router.put("/:_id", (req, res) => {
    const {_id} = req.params

    const {name, location, duration, salary, desc, skills, ownerId} = req.body
    Mission.findOneAndUpdate({_id}, {name, location, duration, salary, desc, skills, ownerId})
        .then(skill => res.send(skill))
        .catch(err => console.log(err))
})

router.delete("/:_id", (req, res) => {
    const {_id} = req.params
    Mission.findOneAndDelete({_id})
        .then(missions => res.send("success"))
        .catch(err => console.log(err))
})

module.exports = router
