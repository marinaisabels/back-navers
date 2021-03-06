import Router from 'koa-router'

import users from './users-router'
import navers from './navers-router'
import projects from './projects-router'
import naversprojects from './navers-projects-details-router'

const router = new Router()
const api = new Router()

api.use(users)
api.use(navers)
api.use(projects)
api.use(naversprojects)

router.use('/v1', api.routes())

export default router
