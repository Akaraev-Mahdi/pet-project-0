const Router = require('express')
const router = new Router()
const actorRouter = require('./ActorRoute')
const userRouter = require('./UserRoute')

router.use('/user', userRouter)
router.use('/actor', actorRouter)

module.exports = router