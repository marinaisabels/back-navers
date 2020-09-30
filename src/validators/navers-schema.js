import Joi from '@hapi/joi'

import { validateSchema } from 'helpers'

const NaversValidate = {
    create: () =>
        validateSchema({
            body: {
                name: Joi.string().required(),
                birthday: Joi.date().required(),
                admission_date: Joi.date().required(),
                job_role: Joi.string().required()
            }
        }),
    update: () =>
        validadeSchema({
            body: {
                name: Joi.string().required(),
                birthday: Joi.date().required(),
                admission_date: Joi.date().required(),
                job_role: Joi.string().required()
            }
        })
}

export default NaversValidate
