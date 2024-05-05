const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('toughtsdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conexao realizada com sucesso!')
} catch (error) {
    console.log(`Nao foi possivel conectar: ${error}`)
}

module.exports = sequelize