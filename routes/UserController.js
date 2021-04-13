const express = require('express')
const router = express.Router()

const User = require('../models/Users')

router.get("/", (req, res) => {
    User.find({})
        .then(users => res.send(users))
        .catch(err => console.log(err))
})

router.post("/", (req, res) => {
    const {name, mail, avatar, age, bookmarks, oldest} = req.body
    const newUser = new User({
        name, mail, avatar, age, bookmarks, oldest
    })
    newUser.save() // du mongoose
        .then(users => res.send(users))
        .catch(err => console.log(err))
})

router.get("/:_id", (req, res) => {
    const {_id} = req.params
    User.findOne({_id: _id})
        .then(skill => res.send(skill))
        .catch(err => console.log(err))
})

router.put("/:_id", (req, res) => {
    const {_id} = req.params

    const {name, mail, avatar, age, bookmarks, oldest} = req.body
    User.findOneAndUpdate({_id}, {name, mail, avatar, age, bookmarks, oldest})
        .then(skill => res.send(skill))
        .catch(err => console.log(err))
})

router.delete("/:_id", (req, res) => {
    const {_id} = req.params
    User.findOneAndDelete({_id})
        .then(users => res.send("success"))
        .catch(err => console.log(err))
})

module.exports = router
