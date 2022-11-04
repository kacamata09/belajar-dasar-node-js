const express = require('express')
const session = require('express-session')



const app = express()

app.set('view engine', 'ejs')

app.use(session({
    resave: false,
    name:'rahasia',
    saveUninitialized: false ,
    secret: 'hacker jangan menyerang',
    cookie: {
        sameSite: true,
        maxAge: 600000
    }
}))

app.get('/', (requ, resp) => {
    requ.session.coba = true
    requ.session.cobalagi = 'meow meow meow'
    resp.send('coba ke link ini, untuk buktiin <a href="/dashboard">Dashboard</a>')
})

app.get('/dashboard', (requ, resp)=> {
    if (requ.session.coba == true) {
        const meow = requ.session.cobalagi
        resp.send(`berhasil menambahkan sesi ${meow}`)
        return
    } 
    resp.send('belum ada sesi')
})

app.get('/hancursesi', (requ, resp) => {
    requ.session.coba = false
    // requ.session.destroy()
    resp.send('sesi berhasil dihancurkan')
})

app.get('/tanpasesi', (requ, resp) => {
    if (requ.session.coba == false) {
        // btw undefined dan false berbeda ya...
        // kalau false itu berarti dia punya nilai yaitu boolean walaupun nilainya false
        // undefined itu tidak terdefinisi
        const meow = requ.session.cobalagi
        resp.send(`ini halaman bisa diakses jika sesi coba jadi false tapi sesi coba belum dihancurkan sebenarnya karena dia masih ada, dan ada ${meow}`)
        return
    } else if(requ.session.coba == undefined) {
        resp.send('ini si sesi coba nya undefined')
    }
    resp.send('berarti si sesi masih true')
})

app.listen(1000, console.log('server ini berjalan di port 1000'))
