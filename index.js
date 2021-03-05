// index.js or Client

const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

/*
This is the Client-End of the project
You can find the server on: https://repl.it/@neevcuber/Client-Server-Interaction-Server
or the main page: https://Client-Server-Interaction-Server.neevcuber.repl.co
*/

// variable initialization
let app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// post function
let postNum = async (val) => {
    fetch(`https://Client-Server-Interaction-Server.neevcuber.repl.co/post/${val}`)
    .then (() => {
        return 'posted succesfully';
    })
}

// Client initialization
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    postNum(req.body.sumval)
    res.redirect('/')
})

// app port
app.listen(8080)