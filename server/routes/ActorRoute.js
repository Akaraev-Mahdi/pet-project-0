const Router = require('express')
const router = new Router()
const chekRoleMid = require('../middleware/chekRoleMid')
const ActorController = require('../controllers/actorController')

router.post('/', chekRoleMid('user1@mail.ru'), ActorController.create)
router.get('/', ActorController.getAll)
router.delete('/', ActorController.delete)
router.put('/', ActorController.update)

router.post('/personal', ActorController.PersonalCreate)
router.get('/personal', ActorController.GetPA)

module.exports = router