const Sequelize = require('sequelize')

const dbku = new Sequelize('inilahdbku', 'root', '', {
    dialect:'mysql',
    host: 'localhost'
})

// const dbku = new Sequelize('sqlite::memory:')

const tersambung = async () => {
    await dbku.authenticate()
    console.log('Mysql sedang teresambiung.....')
}

const mahasiswa = dbku.define('mahasiswa', {
    nama: Sequelize.STRING,
    alamat: Sequelize.STRING,
    jurusan: Sequelize.STRING
    
}, {
    freezeTableName : true,
    timestamps: false
})

const siswa = dbku.define('siswa', {
    nama: {
        type: Sequelize.STRING,
        defaultValue: 'Anshar'},
    alamat: Sequelize.STRING(128)
}, {
    freezeTableName : true,
    timestamps: false
})

siswa.removeAttribute('id')

siswa.sync()


mahasiswa.sync()

tersambung()
