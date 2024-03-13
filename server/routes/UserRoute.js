const Router = require('express')
const router = new Router()
const authMid = require('../middleware/authMid')
const userController = require('../controllers/userController')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.put('/auth', userController.putOne)
router.get('/auth', authMid, userController.chek)

module.exports = router