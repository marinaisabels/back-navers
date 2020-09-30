import Router from 'koa-router'

import NaversController from 'controllers/navers-controller'
import NaversValidate from 'validators/navers-schema'

const router = new Router()

router.post('/navers/signup', NaversValidate.create(), NaversController.create)

router.get('/navers', NaversController.index)
router.get('/navers/:id', NaversController.show)

router.put('/navers/:id', NaversValidate.update(), NaversController.update)

router.delete('/navers/:id', NaversController.destroy)

export default router.routes()
