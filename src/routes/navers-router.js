import Router from 'koa-router'

import NaversController from 'controllers/navers-controller'


const router = new Router()

router.get('/navers', NaversController.index)

router.post('/navers/signup', NaversController.create)

router.get('/navers/:id', NaversController.show)

export default router.routes()