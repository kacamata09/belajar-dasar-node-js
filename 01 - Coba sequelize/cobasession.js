const express = require('express')
const session = require('express-session')



const app = express()

app.use(session({
    name:'rahasia',
    saveUninitialized: true ,
    secret: 'hacker jangan menyerang',
    cookie: {
        sameSite: true,
        maxAge: 6000
    }
}))

app.get('/', (requ, resp) => {
    
})

app.listen(1000, console.log('server ini berjalan di port 1000'))
