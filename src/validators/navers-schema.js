import Joi from '@hapi/joi'

import { validateSchema } from 'helpers'

const NaversValidate = {
    create: () =>
        validateSchema({
            body: {
                name: Joi.string().required(),
                birthdate: Joi.date().required(),
                admission_date: Joi.date().required(),
                job_role: Joi.string().required(),
                projects: Joi.string().required()
            }
        }),
    update: () =>
        validateSchema({
            body: {
                name: Joi.string().required(),
                birthdate: Joi.date().required(),
                admission_date: Joi.date().required(),
                job_role: Joi.string().required(),
                projects: Joi.string().required()
            }
        })
}

export default NaversValidate
