const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()

app.use(session({
    saveUninitialized: false,
    resave:false,
    secret: 'hacker, jangan menyerang',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 600000
    },
}))

app.use(cookieParser())

app.get('/inicookies', (requ, resp) => {
    resp.cookie('cobacook', 'ini cookies')
    resp.redirect('/')
})

app.get('/', (requ, resp) => {
    console.log(requ.cookies.cobacook)
    resp.send(requ.cookies.cobacook)
})

app.get('/')


app.listen(2000, console.log('Server sedang berjalan....'))
