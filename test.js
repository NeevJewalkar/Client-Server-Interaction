// test.js

const fetch = require('node-fetch')

/*
Something wrong? Run node tests.js to run an example post message to the server
*/

fetch('https://Client-Server-Interaction-Server.neevcuber.repl.co/post/34')
.then(async () => {
    console.log('injected number 34')
    await fetch('https://Client-Server-Interaction-Server.neevcuber.repl.co/post/16')
    .then(async () => {
        console.log('injected 16')
    })
})