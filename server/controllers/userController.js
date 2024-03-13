const bcrypt = require('bcrypt')
const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generetejwt = (id, email, passed) => {
    return jwt.sign({id, email, passed}, 'SECRET_KEY', {expiresIn: '24h'})
}

class UserController {
    async registration(req, res, next){
        const {email, password, passed} = req.body
        if (!email || !password){
            return next(ApiError.badreq('Некоректный password или email'))
        }
        const candidate = await User.findOne({where:{email}})
        if(candidate){
            return next(ApiError.badreq('Пользователь с таким email уже есть'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, password: hashPassword, passed})
        const token = generetejwt(user.id, user.email, user.passed)
        return res.json({token})
    }

    async login(req, res, next){
        const {email, password, passed} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return next(ApiError.badreq('Такого пользователя не существует'))
        }
        let Cpassword = bcrypt.compareSync(password, user.password)
        if(!Cpassword){
            return next(ApiError.badreq('Не верный пароль'))
        }
        const token = generetejwt(user.id, user.email, user.passed)
        return res.json({token})
    }

    async chek(req, res){
        const token = generetejwt(req.user.id, req.user.email, req.user.passed)
        return res.json({token})
    }

    async putOne(req, res){
        const {id} = req.query
        await User.update({passed: true}, {where: {id: id}})
        const user = await User.findOne({where:{id: id}})
        const token = generetejwt(user.id, user.email, user.passed)
        return res.json({token})
    }
}

module.exports = new UserController()