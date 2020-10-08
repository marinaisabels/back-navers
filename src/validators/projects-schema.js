import Joi from '@hapi/joi'

import { validateSchema } from 'helpers'

const ProjectsValidate = {
  create: () =>
    validateSchema({
      body: {
        name: Joi.string().required(),
        navers:Joi.string().required()
      }
    }),

  update: () =>
    validateSchema({
      body: {
        name: Joi.string().required(),
        navers:Joi.string().required()
      }
    })
}

export default ProjectsValidate