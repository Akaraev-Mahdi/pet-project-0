const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    'web#0',
    'postgres',
    'root',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432'
    }
)