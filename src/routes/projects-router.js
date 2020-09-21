import Router from 'koa-router'

import ProjectsController from 'controllers/projects-controller'

const router = new Router()

router.post('/projects/register', ProjectsController.create)

router.get('/projects', ProjectsController.index)
router.get('/projects/:id', ProjectsController.show)

export default router.routes()