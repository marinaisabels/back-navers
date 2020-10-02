import Router from 'koa-router'

import ProjectsController from 'controllers/projects-controller'
import ProjectsValidate from 'validators/projects-schema'

const router = new Router()

router.post('/projects/register', ProjectsValidate.create(), ProjectsController.create)

router.get('/projects', ProjectsController.index)
router.get('/projects/:id', ProjectsController.show)

router.put('/projects/:id', ProjectsValidate.update(), ProjectsController.update)

router.delete('/projects/:id', ProjectsController.destroy)

export default router.routes()