import Router from 'koa-router'

import ProjectsController from 'controllers/projects-controller'

const router = new Router()

router.post('/projects/register', ProjectsController.create)

router.get('/projects', ProjectsController.index)
router.get('/projects/:id', ProjectsController.show)

router.put('/projects/:id', ProjectsController.update)

router.delete('/projects/:id', ProjectsController.destroy)

export default router.routes()