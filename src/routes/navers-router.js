import Router from 'koa-router'

import NaversController from 'controllers/navers-controller'

const router = new Router()

router.post('/navers/signup', NaversController.create)

router.get('/navers', NaversController.index)
router.get('/navers/:id', NaversController.show)

router.put('/navers/:id', NaversController.update)

router.delete('/navers/:id', NaversController.destroy)

export default router.routes()
