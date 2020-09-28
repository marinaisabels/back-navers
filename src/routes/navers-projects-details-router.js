import Router from 'koa-router'

import NaversProjectsController from 'controllers/navers-projects-details-controller'

const router = new Router()



router.get('/navers-details', NaversProjectsController.index)
router.get('/navers-details/:id', NaversProjectsController.show)

export default router.routes()