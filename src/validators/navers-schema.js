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
                project: Joi.any().required()
            }
        }),
    update: () =>
        validateSchema({
            body: {
                name: Joi.string().required(),
                birthdate: Joi.date().required(),
                admission_date: Joi.date().required(),
                job_role: Joi.string().required(),
                project: Joi.any().required()
            }
        })
}

export default NaversValidate
