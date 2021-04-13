const express = require('express')
const router = express.Router()

const Skill = require('../models/Skills')

router.get("/", (req, res) => {
    Skill.find({})
        .then(skills => res.send(skills))
        .catch(err => console.log(err))
})

router.post("/", (req, res) => {
    const {name} = req.body
    const newSkill = new Skill({
        name
    })
    newSkill.save() // du mongoose
        .then(skills => res.send(skills))
        .catch(err => console.log(err))
})

router.get("/:_id", (req, res) => {
    const {_id} = req.params
    Skill.findOne({_id: _id})
        .then(skill => res.send(skill))
        .catch(err => console.log(err))
})

router.put("/:_id", (req, res) => {
    const {_id} = req.params

    const {name} = req.body
    Skill.findOneAndUpdate({_id}, {name})
        .then(skill => res.send(skill))
        .catch(err => console.log(err))
})

router.delete("/:_id", (req, res) => {
    const {_id} = req.params
    Skill.findOneAndDelete({_id})
        .then(skills => res.send("success"))
        .catch(err => console.log(err))
})

module.exports = router
