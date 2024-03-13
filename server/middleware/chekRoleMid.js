const jwt = require('jsonwebtoken')

module.exports = function(email){
    return function(req, res, next){
        if(req.method === 'OPTIONS'){
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.json({message: 'Не авторизован.'})
            }
            const decoded = jwt.verify(token, 'SECRET_KEY')
            if (decoded.email !== email){
                return res.status(403).json({message: 'Нет доступа.'})
            }
            req.user = decoded
            next()
        } catch (error) {
            res.json({message: 'Не авторизован.'})
        }
    }
}