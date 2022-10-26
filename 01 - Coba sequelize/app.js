const Sequelize = require('sequelize')

const sequelize = new Sequelize('coba_sequeilize', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

// pake async await
async function koneksi() {
    await sequelize.authenticate()
    console.log('Koneksi mysql tersambung...')
}

// versi pake menangani promise dengan then catch

// sequelize.authenticate()
//     .then(() => {
//     console.log('Koneksi ke mysql sudah tersambung')
//     })
//     .catch((err)=> {
//         console.log('koneksi tidak tersambung, ada kesalahan')
//     })

const Nandenaite = sequelize.define('nandenaite', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    namaaa: {
        type: Sequelize.DataTypes.STRING
    },
    jurusanaa: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Informatika'
    }
}
)

const Nani = sequelize.define('nani..?', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    namaaa: {
        type: Sequelize.DataTypes.STRING
    },
    jurusanaa: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Informatika'
    }
}
).sync()

const wadih = sequelize.define('wadih', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    namaaa: {
        type: Sequelize.DataTypes.STRING
    },
    jurusanaa: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Informatika'
    }
}
)
const ss = sequelize.define('sss', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    namaaa: {
        type: Sequelize.DataTypes.STRING
    },
    jurusanaa: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Informatika'
    }
}
).sync()

const gf = sequelize.define('makes', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    namaaa: {
        type: Sequelize.DataTypes.STRING
    },
    jurusanaa: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Informatika'
    }
}
).sync()

const pa = sequelize.define('parts', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    namaaa: {
        type: Sequelize.DataTypes.STRING
    },
    jurusanaa: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Informatika'
    }
}
).sync()


const Mahasiswa = sequelize.define('mahasiswa', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    nama: {
        type: Sequelize.DataTypes.STRING
    },
    jurusan: {
        type: Sequelize.DataTypes.STRING,
        defaultValue: 'Informatika'
    }
}
)
Nandenaite.sync()
    .then(data => console.log('berhasil ditambahkan si nande naite'))
    .catch(err => console.log('error'))


Mahasiswa.sync()
    .then((data)=> {
        console.log('Tabel dan model mahasiswa berhasil ditambahkan')
    })
    .catch((err)=> {
        console.log('error saat mencoba buat tabel')
    })

// jalankan koneksi
koneksi()

console.log('apapun tambahan disini')