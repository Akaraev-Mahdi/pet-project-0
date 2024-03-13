const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    passed: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const PersonalActor = sequelize.define('personalactor', {
    user_id: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING, allowNull: false},
    score: {type: DataTypes.INTEGER, defaultValue: 0},
    name: {type: DataTypes.STRING, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false}
})

const Actor = sequelize.define('actor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    score: {type: DataTypes.INTEGER, defaultValue: 0},
    personalscore: {type: DataTypes.INTEGER, defaultValue: 0},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    User,
    Actor,
    PersonalActor
}