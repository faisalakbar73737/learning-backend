const express = require('express')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {text: "tes"})
})

app.get('/tes', (req, res)=>{
    res.send('Hohoho')
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(PORT, ()=>{
    console.log(`listening to PORT: ${PORT}`)
})