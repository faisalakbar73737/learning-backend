const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('users')
})

router.get('/new', (req, res)=>{
    res.send('new user form')
})

router.post('/', (req, res)=>{
    res.send('post request')
})

router.route('/:id').get((req, res)=>{
    console.log(req.user)
    res.send(`user ${req.params.id}`)
}).put((req, res)=>{
    res.send(`user ${req.params.id}`)
}).delete((req, res)=>{
    res.send(`user ${req.params.id}`)
})

const user = [{nama: "zoro"}, {nama: "jack"}]

router.param('id', (req, res, next, id)=>{
    req.user = user[id]
    next()
})

module.exports = router