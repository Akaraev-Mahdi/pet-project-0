const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    if(req.method === 'OPTIONS'){
        next()
    }
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.json({message: 'Не авторизован'})
    }
    const decoded = jwt.verify(token, 'SECRET_KEY')
    req.user = decoded
    next()
}