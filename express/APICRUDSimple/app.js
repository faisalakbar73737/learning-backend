const express = require('express')
const app = express()
const PORT = 3000

let users = []

app.set('view engine', 'ejs')
app.use(express.json())

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/users', (req, res)=>{
    const newUser = {
    id: users.length + 1,
    email: req.body.email,
    password: req.body.password
  }

  users.push(newUser)

  res.status(201).json(newUser)
})

app.get('/users', (req, res)=>{
    res.json(users)
})

app.get('/users/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    const user = users.find(u => u.id == id)

    if(!user){
        return res.status(404).json({meesage: "User tidak ditemukan"})
    }

    res.json(user)
})

app.put('/users/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    const user = users.find(u => u.id === id)

    if(!user){
        return res.status(404).json({message: "User tidak ditemukan"})
    }

    user.email = req.body.email || user.email
    user.password = req.body.password || user.password

    res.json(user)
})

app.delete('/users/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    const index = users.findIndex(u => u.id === id)

    if (index === -1) {
        return res.status(404).json({ message: 'User tidak ditemukan' })
    }

    users.splice(index, 1)

    res.json({ message: 'User berhasil dihapus' })
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

app.listen(PORT, ()=>{
    console.log(`connecting to port ${PORT}`)
})